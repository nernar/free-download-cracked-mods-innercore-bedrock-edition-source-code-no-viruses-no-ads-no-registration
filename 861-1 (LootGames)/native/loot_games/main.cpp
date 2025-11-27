#include <mod.h>
#include <logger.h>
#include <nativejs.h>
#include <memory>
#include "headers/stl/string"
#include "all_headers.cpp"
#include "headers/vtable.h"

class LootGamesModule : public Module {
public:
	LootGamesModule(const char* id): Module(id) {};
	virtual void initialize(){
	};
};

JS_MODULE_VERSION(LootTablesModule, 1);

JS_EXPORT_COMPLEX(LootTablesModule, generateAt, "V(SS)", (JNIEnv* env, NativeJS::ComplexArgs arguments) {
	BlockSource* blockSource = (BlockSource*) arguments.get("bsptr").asPointer();
	Actor* actor = Actor::wrap((long long) arguments.get("uuid").asInt64());
	if(actor == nullptr) {
		Logger::debug("LG", "actor is nullptr");
		return 0;
	};
	BlockActor* blockActor = blockSource->getBlockEntity(arguments.get("x").asInt(), arguments.get("y").asInt(), arguments.get("z").asInt());
	if(blockActor == nullptr){
		Logger::debug("LG", "blockActor is null");
		return 0;
	};
	VTABLE_FIND_OFFSET(getContainer, _ZTV10BlockActor, _ZN10BlockActor12getContainerEv)
	Container* container = VTABLE_CALL<Container*>(getContainer, blockActor);
	if(container == nullptr){
		Logger::debug("LG", "container is null");
		return 0;
	};
	Level* level = GlobalContext::getServerLevel();
	Random* random = level->getRandom();
	Util::LootTableUtils::fillContainer(*level, *container, *random, stl::string(arguments.get("name").asString()), actor);
});

class LootGamesOtherModule : public Module {
public:
	LootGamesOtherModule(Module* parent, const char* id) : Module(parent, id) {};
};

MAIN {
	Module* loot_games_module = new LootGamesModule("loot_games");
	new LootGamesOtherModule(loot_games_module, "loot_games.other_module");
};
