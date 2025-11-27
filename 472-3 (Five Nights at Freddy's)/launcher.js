var version = java.lang.Class.forName("zhekasmirnov.launcher.api.Version", false, UI.getContext().getClass().getClassLoader());
version.getField("INNER_CORE_VERSION").get(null) == "v1.1.2.42 beta" ? Launch() : alert("Freddy's cannot be loaded, unsupported engine version");

