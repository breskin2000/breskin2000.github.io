var CurrentScene = 1, PreviousScene = 1;
var Scenes = 1;
var SceneChanged = false;

function OnLoad() {
    Scenes = document.getElementsByClassName("scene").length;

    setInterval(function() {
        if (!SceneChanged) {
            var SceneToOpen = CurrentScene + 1;
            if (SceneToOpen > Scenes) {SceneToOpen = 1;}
            OpenScene(SceneToOpen);
        } else {SceneChanged = false;}
    }, 5000);
}

function OpenScene(scene) {
    if (CurrentScene != scene) {
        if (CurrentScene % 2 == 0)
            document.getElementById("openscene" + CurrentScene).style.borderTopColor = "#004882";
        else
            document.getElementById("openscene" + CurrentScene).style.borderBottomColor = "#004882";
        
        if (scene % 2 == 0)
            document.getElementById("openscene" + scene).style.borderTopColor = "#007cff";
        else
            document.getElementById("openscene" + scene).style.borderBottomColor = "#007cff";
            
        document.getElementById("scene" + scene).style.display = "block";
        setTimeout(function() {document.getElementById("scene" + PreviousScene).style.display = "none";}, 1400);
           
        setTimeout(function() { 
            document.getElementById("scene" + CurrentScene).style.opacity = "0";
            document.getElementById("scene" + scene).style.opacity = "1";
            
            PreviousScene = CurrentScene;
            CurrentScene = scene;
            SceneChanged = true;
        }, 100);
    }
}