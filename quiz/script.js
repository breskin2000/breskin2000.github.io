var CurrentQuestion = 1;
var Result = 0;
var TimerWorking = false;
var QuestionQuantity = 12;

window.onload = function()
{
    document.getElementById("q" + CurrentQuestion).style.opacity = "1";
}

function choose(question, clicked, correct, message)
{
    if (TimerWorking || CurrentQuestion != question)
        return;

    if (clicked == correct)
    {
        document.getElementById("q" + question + "a" + clicked).style.backgroundColor="#00d819";
        Result++;
    }
    else
    {
        document.getElementById("q" + question + "a" + clicked).style.backgroundColor="#ff0000";
    }

    document.getElementById("q" + question + "comment").innerText = message;
    document.getElementById("q" + question + "comment").style.opacity = "1";

    TimerWorking = true;
    setTimeout(function() {
        document.getElementById("q" + question).style.opacity = "0";

        setTimeout(function() {
            document.getElementById("q" + question).style.display = "none";

            if (question == QuestionQuantity) {
                finish();
            }
            else {
            document.getElementById("q" + (question + 1)).style.opacity = "1";
            document.getElementById("q" + (question + 1)).style.transition = "all 0.5s";

            CurrentQuestion = question + 1;
            }

            TimerWorking = false;
        }, 500);
    }, 1000 + message.length * 50);
}

function finish() {
    if (Result > 6)
    {
        document.getElementById("finishf").style.opacity = "1";
        document.getElementById("finishg").style.display = "none";
        document.getElementById("finishdziennikarska").style.display = "none";
    }
    else if (Result <= 6 && Result > 3)
    {
        document.getElementById("finishg").style.opacity = "1";
        document.getElementById("finishf").style.display = "none";
        document.getElementById("finishdziennikarska").style.display = "none";
    }
    else
    {
        document.getElementById("finishdziennikarska").style.opacity = "1";
        document.getElementById("finishf").style.display = "none";
        document.getElementById("finishg").style.display = "none";
    }
}