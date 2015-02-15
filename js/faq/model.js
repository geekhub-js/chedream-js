angular.module('faq.model', [
    'cheDream.api'
])
    .factory('faq', function (api) {
        var questions = [
            {
                "id": 54,
                "title": "eos",
                "question": "YOURS: I don't like them raw.' 'Well, be off, and that if you don't explain it as you say \"What a.",
                "answer": "Dormouse; '--well in.' This answer so confused poor Alice, 'it would be of very little use, as it went, 'One side of WHAT? The other guests had taken his watch out of the court,\" and I could let you.",
                "slug": "eos"
            },
            {
                "id": 54,
                "title": "voluptas",
                "question": "King. 'Nothing whatever,' said Alice. 'I wonder how many hours a day or two: wouldn't it be of any.",
                "answer": "The Queen!' and the March Hare. 'He denies it,' said Alice. 'Well, I hardly know--No more, thank ye; I'm better now--but I'm a deal faster than it does.' 'Which would NOT be an old woman--but.",
                "slug": "voluptas"
            },
            {
                "id": 54,
                "title": "sed",
                "question": "William's conduct at first was in March.' As she said to the table for it, while the rest of the.",
                "answer": "They all made of solid glass; there was no one else seemed inclined to say to itself, half to itself, half to Alice. 'What IS a long tail, certainly,' said Alice as she fell past it. 'Well!' thought.",
                "slug": "sed"
            },
            {
                "id": 54,
                "title": "rerum",
                "question": "In another moment that it was too small, but at the end of your flamingo. Shall I try the patience.",
                "answer": "So she began: 'O Mouse, do you want to see some meaning in it,' said the Caterpillar; and it said nothing. 'This here young lady,' said the Gryphon. 'We can do without lobsters, you know. Come on!'.",
                "slug": "rerum"
            },
            {
                "id": 54,
                "title": "alias",
                "question": "I think you'd better finish the story for yourself.' 'No, please go on!' Alice said very humbly;.",
                "answer": "So they got settled down again, the Dodo replied very gravely. 'What else have you executed, whether you're nervous or not.' 'I'm a poor man, your Majesty,' he began, 'for bringing these in: but I.",
                "slug": "alias"
            },
            {
                "id": 54,
                "title": "nihil",
                "question": "THE.",
                "answer": "The Mouse did not like to drop the jar for fear of their hearing her; and when she had gone through that day. 'That PROVES his guilt,' said the Gryphon, 'that they WOULD not remember the simple.",
                "slug": "nihil"
            },
            {
                "id": 54,
                "title": "nemo",
                "question": "Hatter: 'as the things being alive; for instance, there's the arch I've got to?' (Alice had been.",
                "answer": "There was exactly one a-piece all round. (It was this last remark. 'Of course they were', said the last concert!' on which the cook had disappeared. 'Never mind!' said the King. Here one of the.",
                "slug": "nemo"
            },
            {
                "id": 54,
                "title": "illum",
                "question": "Seven. 'Yes, it IS his business!' said Five, in a great thistle, to keep back the wandering hair.",
                "answer": "Majesty,' said the last word with such a capital one for catching mice--oh, I beg your pardon,' said Alice more boldly: 'you know you're growing too.' 'Yes, but some crumbs must have imitated.",
                "slug": "illum"
            },
            {
                "id": 54,
                "title": "qui",
                "question": "Dormouse, who was gently brushing away some dead leaves that lay far below her. 'What CAN all that.",
                "answer": "Alice, and looking at the top of his pocket, and was going on, as she went hunting about, and make one repeat lessons!' thought Alice; 'I can't go no lower,' said the King. 'I can't remember half of.",
                "slug": "qui"
            },
            {
                "id": 54,
                "title": "quo",
                "question": "The miserable Hatter dropped his teacup instead of onions.' Seven flung down his cheeks, he went.",
                "answer": "But she did not at all the things I used to queer things happening. While she was looking at Alice for protection. 'You shan't be able! I shall ever see such a wretched height to be.' 'It is wrong.",
                "slug": "quo"
            }
        ];
        /*
        var questions = {};
        api('/faqs.json').then(function (data) {
            questions = data.items;
        });*/

        var faq = {
            getQuestions: function () {
                return questions;
            }
        };

        return faq;
    });