#include "headers/stl/string"
#include <nativejs.h>

#define stl std::__ndk1

class Random;
class Container;

class Level {
	public:
	Random* getRandom() const;
};

class BlockActor;

class BlockSource {
	public:
	BlockActor* getBlockEntity(int, int, int);
};

class ServerLevel : public Level {
	public:
};

namespace GlobalContext {
	ServerLevel* getServerLevel();
};

class Actor {
	public:
	static Actor* wrap(long long);
};

class Util {
	public:
	class LootTableUtils {
		public:
		static void fillContainer(Level&, Container&, Random&, stl::string const&, Actor*);
	};
};

class ExternalFileLevelStorageSource {
	public:
	//void copyLevelFromFilePath(stl::string const&);
};
