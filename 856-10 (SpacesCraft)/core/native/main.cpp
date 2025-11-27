#include <hook.h>
#include <mod.h>
#include <logger.h>
#include <symbol.h>
#include <nativejs.h>

class MainModule : public Module {
public:
 MainModule(const char* id): Module(id) {};

 virtual void initialize(){
  
  }
};

namespace Logger {
    void debug(char const*, char const*, ...);
    void flush();
};


class OtherModule : public Module {
public:
 OtherModule(Module* parent, const char* id) : Module(parent, id) {};
};

MAIN {
 Module* main_module = new MainModule("sample_library");
 new OtherModule(main_module, "sample_library.other_module");
}

JS_MODULE_VERSION(DimensionModule, 1)

JS_EXPORT( 
DimensionModule, getHeight, "I(L, I, I, I)", (JNIEnv * env, long pointer, int x, int y, int z) { 
	
    return -1; 
});
