module.exports = function (grunt) {
  grunt.initConfig({
    sources: {
      js: "www/js",
      brw: "platforms/browser/www",
    },
    shell: {
      editor_run: "npx shadow-cljs server",
      editor_watch: "npx shadow-cljs watch editor",
      shadow_run: "npx shadow-cljs start",
      shadow_watch: "npx shadow-cljs watch browser",
      shadow_stop: "npx shadow-cljs stop",
      cordova_build: "cordova build browser",
    },
    clean: {
      src: ["<%= sources.js %>"],
    },
    watch: {
      scripts: {
        files: "www/js/**/*.js",
        tasks: ["shell:cordova_build"],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("default", ["clean", "shell:shadow_run", "watch:scripts"]);
  grunt.registerTask("start_editor", [
    "shell:shadow_run",
    "shell:editor_watch",
  ]);
  grunt.registerTask("stop", ["shell:shadow_stop"]);
};
