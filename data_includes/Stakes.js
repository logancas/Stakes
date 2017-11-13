var manualSendResults = "true";

var shuffleSequence = seq("trial_template","sr","end");

//var shuffleSequence = seq("consent","instructions",
  //                        "training1","training2",
    //                      rshuffle("control_why","control_what","trial1","trial2"...),
      //                    "sr","end");

var items = [
    // controller to send results early
        ["sr", "__SendResults__", { }],
    //instructions, consent, attention check, and video test
        ["instructions", "Form", { html: {include: "instructions.html" } } ],
        ["consent", "Form", { html: {include: "consent.html" } } ],
        ["trial_template", "Form", { html: {include: "trial_template.html" } } ],
        ["training1", "Form", { html: {include: "training1.html" } } ],
        ["end", "Form", { html: {include: "end.html" }, continueMessage: null} ],
        ["attention_check", "Form", { html: {include: "attention_check.html" } } ],
        ["test_video", "Form", { html: {include: "test_video.html" } } ],
    // trials
        ["trial", "Form", { html: {include: "trial_template.html" } } ],

];

var defaults = [
    // save reaction time for each Form controller
    "Form", {saveReactionTime: "true"}
];


