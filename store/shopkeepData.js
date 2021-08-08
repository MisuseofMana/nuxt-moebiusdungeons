export const state = () => ({
	visiting: 'cleric',
	shopkeeps: {
		cleric: {
			description: 'A devout matron of the Eyien church. Heals your wounds, provides blessings, buffs, and powerful boons.',
			saying:'Come in, are you hurt?',
			shopTitle: 'I can heal you... or perhaps you need the favor of the old gods?',
			welcome:['hello', 'hello2', 'welcome', 'welcome2',],
			welcomeBack:['youreBack', 'youreBack2' ],
			goodbye:['goodbye', 'goodbye2', 'beCareful', 'beCareful2', 'seeYouSoon', 'seeYouSoon2', 'staySafe', 'staySafe2' ],
			thankYou:['feelingBetter', 'feelingBetter2', 'thanks', 'thanks2', 'thankYou', 'thankYou2', ],
			cantBuy:['notEnough', 'notEnough2', 'moreCoin', 'moreCoin2', ],
			bigBuy:['byAmara', 'byAmara2']
		},
		scribe: {
			description: 'A young boy raised by the librarians and mages of Eyien. He sells sigils and wards which can alter your essence.',
			saying:'Hey! Wanna try drawing some sigils?',
			shopTitle: 'Are you a kingloyal? That\'s so cool!',
			// welcome:['hello', 'hello2', 'welcome', 'welcome2',],
			// welcomeBack:['youreBack', 'youreBack2' ],
			// goodbye:['goodbye', 'goodbye2', 'beCareful', 'beCareful2', 'seeYouSoon', 'seeYouSoon2', 'staySafe', 'staySafe2' ],
			// thankYou:['feelingBetter', 'feelingBetter2', 'thanks', 'thanks2', 'thankYou', 'thankYou2', ],
			// cantBuy:['notEnough', 'notEnough2', 'moreCoin', 'moreCoin2', ],
			// bigBuy:['byAmara', 'byAmara2']
		},
		graverobber: {
			description: 'An untrustworthy soul. Provides items that come with a deeper cost than just simple coins. Don\'t get him wrong, he\'s happy to take your coin too.',
			saying:'Trust me, nothing I sell is cursed.',
			shopTitle: 'Just buy somethin\' quick, I don\'t wanna be seen fencing to the Kingloyal.',
			welcome:['heyThere', 'heyThereCoterie', 'heyThereCoterie2', 'huh', 'keepYourDistance', 'wantSome', 'welcome', 'whatDoYouNeed', 'whatDoYouNeed2', 'whatDoYouNeed3'],
			welcomeBack:['backForMore', 'backForMore2', 'backForMore3', 'enoughOfMe', 'enoughOfMe2', 'enoughOfMe3', 'knewYoudBeBack', 'knewYoudBeBack2',], 
			goodbye:['illBeHere', 'illBeHere2', 'nextTime', 'nextTime2', 'okay', 'staySafe', 'staySafe2'],
			thankYou:['alright', 'buyAnother', 'buyAnother2', 'buyAnother3', 'goodEye', 'goodEye2', 'heresOne', 'laugh', 'laugh2', ],
			cantBuy:['noBargaining', 'noBargaining2', 'noDiscounts', 'notEnoughCoin', 'notEnoughCoin2', 'notEnoughCoin3', 'youreBroke'],
			bigBuy:['gladToRidThat', 'gladYouBought', 'gladYouBought2', 'pickedAnother', 'pickedAnother2', 'thankYouSire',]
		},
		merchant: {
			description: 'An honest tradesman. Provides meals to raise your max Health, kits to increase your Armor, and Mettle vials to embolden your special abilities.',
			saying:'Friend or foe, what are ya\' buyin\'?',
			shopTitle: 'It\'s not much, but it\'s what I\'ve got. All priced to move.',
			welcome:['hello', 'howsTheAdventuring', 'newStockToday', 'takeALookAround', 'welcome'],
			welcomeBack:['backForMore', 'welcomeBack'], 
			goodbye:['seeYouNextTime', 'staySafe'],
			thankYou:['anythingElse', 'goodChoice', 'interestingChoice', 'justPickedThatOut', 'thankYou'],
			cantBuy:['areYouKidding', 'shortSomeCoin', 'shortSomeCoin2', 'cantAffordThat', 'trySomethingCheaper', 'outOfYourMind', 'notACharity','goLootSomething', 'needMoreCoin', 'needMoreCoin2'],
			bigBuy:['justCleanedOff', 'spendItAllAtOnce', 'wonderfulChoice']
		},
		witch: {
			description: 'A primordial being, unassuming in shape. She offers powerful spells to wildly boost your stats. Be wary, some magics can be more trouble than they\'re worth.',
			saying:'Everything you see, all hand enchanted.',
			shopTitle: 'Some of my inventory tends to be virulent. Browse at your own risk.',
			welcome:['hello', 'hello2', 'hello3', 'oh', 'ohHello' ],
			welcomeBack:['welcomeBack', 'welcomeBack2'], 
			goodbye:['goodbye', 'goodbye2', 'seeYouSoon', 'seeYouSoon2'],
			thankYou:['thankYou', 'thankYou2', 'carefulWithThat', 'carefulWithThat2', 'itsAllYours', 'itsAllYours2'],
			cantBuy:['notEnough', 'notEnough2'],
			bigBuy:['interestingChoice', 'interestingChoice2', ]
		}
	},
})

