(function() {
	var app = angular.module("heroDataService", ['mapDataService']);

	var StatBlock = function(
			sustainedDamage,
			burstDamage,
			lockdown,
			sustainedHeal,
			burstHeal,
			shields,
			lanePush,
			slowRootSilence,
			poke,
			mobility,
			globalPresence,
			toughness,
			initiation,
			zoneDisplace,
			merc
	) {
		function validate(value) {
			if (isNaN(value) || value < 0 || value > 10) {
				throw "Invalid value: " + value;
			}

			return value;
		}

		this.sustainedDamage = validate(sustainedDamage);
		this.burstDamage = validate(burstDamage);
		this.lockdown = validate(lockdown);
		this.sustainedHeal = validate(sustainedHeal);
		this.burstHeal = validate(burstHeal);
		this.shields = validate(shields);
		this.lanePush = validate(lanePush);
		this.slowRootSilence = validate(slowRootSilence);
		this.poke = validate(poke);
		this.mobility = validate(mobility);
		this.globalPresence = validate(globalPresence);
		this.toughness = validate(toughness);
		this.initiation = validate(initiation);
		this.zoneDisplace = validate(zoneDisplace);
		this.merc = validate(merc);
	};

	var assassin = "Assassin";
	var warrior = "Warrior";
	var specialist = "Specialist";
	var support = "Support";

	var ranged = "Ranged";
	var melee = "Melee";

	var Hero = function(
			name,
			rangedOrMelee,
			role,
			stats
	) {
		this.name = name;
		this.stats = stats;

		var urlName = name.replace(/[^\w]+/g, '').toLowerCase();

		this.largePortraitUrl = "img/" + urlName + ".png";
		this.smallPortraitUrl = "img/" + urlName + "_1.png";
	};

	app.factory('heroDataService', ['mapDataService', function(mapDataService) {
		var abathur = new Hero(
							"Abathur",
							melee,
							specialist,
							new StatBlock(
								3,	// sustainedDamage,
								2,	// burstDamage,
								0,	// lockdown,
								3,	// sustainedHeal,
								2,	// burstHeal,
								4,	// shields,
								4,	// lanePush,
								1,	// slowRootSilence,
								3,	// poke,
								1,	// mobility,
								7,	// globalPresence,
								1,	// toughness,
								3,	// initiation,
								3,	// zoneDisplace
								3	// mercs
							)
						);

		var anubarak = new Hero(
							"Anub'arak",
							melee,
							warrior,
							new StatBlock(
								7,	// sustainedDamage,
								5,	// burstDamage,
								8,	// lockdown,
								2,	// sustainedHeal,
								0,	// burstHeal,
								5,	// shields,
								8,	// lanePush,
								2,	// slowRootSilence,
								7,	// poke,
								4,	// mobility,
								2,	// globalPresence,
								6,	// toughness,
								5,	// initiation,
								7,	// zoneDisplace
								7	// mercs
							)
						);

		var arthas = new Hero(
							"Arthas",
							melee,
							warrior,
							new StatBlock(
								7,	// sustainedDamage,
								6,	// burstDamage,
								0,	// lockdown,
								4,	// sustainedHeal,
								4,	// burstHeal,
								2,	// shields,
								5,	// lanePush,
								7,	// slowRootSilence,
								5,	// poke,
								4,	// mobility,
								2,	// globalPresence,
								7,	// toughness,
								5,	// initiation,
								6,	// zoneDisplace
								6	// mercs
							)
						);

		var azmodan = new Hero(
							"Azmodan",
							ranged,
							specialist,
							new StatBlock(
								8,	// sustainedDamage,
								6,	// burstDamage,
								0,	// lockdown,
								1,	// sustainedHeal,
								0,	// burstHeal,
								1,	// shields,
								9,	// lanePush,
								2,	// slowRootSilence,
								6,	// poke,
								5,	// mobility,
								2,	// globalPresence,
								6,	// toughness,
								5,	// initiation,
								3,	// zoneDisplace
								7	// mercs
							)
						);

		var brightwing = new Hero(
							"Brightwing",
							ranged,
							support,
							new StatBlock(
								4,	// sustainedDamage,
								4,	// burstDamage,
								8,	// lockdown,
								10,	// sustainedHeal,
								4,	// burstHeal,
								7,	// shields,
								6,	// lanePush,
								8,	// slowRootSilence,
								7,	// poke,
								4,	// mobility,
								10,	// globalPresence,
								3,	// toughness,
								3,	// initiation,
								7,	// zoneDisplace
								6	// mercs
							)
						);

		var chen = new Hero(
							"Chen",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								3,	// burstDamage,
								7,	// lockdown,
								6,	// sustainedHeal,
								2,	// burstHeal,
								8,	// shields,
								6,	// lanePush,
								5,	// slowRootSilence,
								2,	// poke,
								3,	// mobility,
								2,	// globalPresence,
								10,	// toughness,
								5,	// initiation,
								7,	// zoneDisplace
								7	// mercs
							)
						);

		var diablo = new Hero(
							"Diablo",
							melee,
							warrior,
							new StatBlock(
								8,	// sustainedDamage,
								5,	// burstDamage,
								9,	// lockdown,
								4,	// sustainedHeal,
								3,	// burstHeal,
								2,	// shields,
								7,	// lanePush,
								4,	// slowRootSilence,
								3,	// poke,
								4,	// mobility,
								5,	// globalPresence,
								6,	// toughness,
								9,	// initiation,
								8,	// zoneDisplace
								7	// mercs
							)
						);

		var etc = new Hero(
							"E.T.C.",
							melee,
							warrior,
							new StatBlock(
								8,	// sustainedDamage,
								5,	// burstDamage,
								8,	// lockdown,
								7,	// sustainedHeal,
								3,	// burstHeal,
								2,	// shields,
								7,	// lanePush,
								8,	// slowRootSilence,
								4,	// poke,
								5,	// mobility,
								9,	// globalPresence,
								9,	// toughness,
								10,	// initiation,
								9,	// zoneDisplace
								7	// mercs
							)
						);

		var falstad = new Hero(
							"Falstad",
							ranged,
							assassin,
							new StatBlock(
								8,	// sustainedDamage,
								9,	// burstDamage,
								0,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								2,	// shields,
								7,	// lanePush,
								5,	// slowRootSilence,
								7,	// poke,
								5,	// mobility,
								10,	// globalPresence,
								6,	// toughness,
								7,	// initiation,
								6,	// zoneDisplace
								8	// mercs
							)
						);

		var gazlowe = new Hero(
							"Gazlowe",
							melee,
							specialist,
							new StatBlock(
								7,	// sustainedDamage,
								4,	// burstDamage,
								7,	// lockdown,
								2,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								7,	// lanePush,
								2,	// slowRootSilence,
								3,	// poke,
								4,	// mobility,
								2,	// globalPresence,
								3,	// toughness,
								5,	// initiation,
								5,	// zoneDisplace
								10	// mercs
							)
						);

		var illidan = new Hero(
							"Illidan",
							melee,
							assassin,
							new StatBlock(
								10,	// sustainedDamage,
								8,	// burstDamage,
								0,	// lockdown,
								8,	// sustainedHeal,
								1,	// burstHeal,
								8,	// shields,
								8,	// lanePush,
								5,	// slowRootSilence,
								6,	// poke,
								7,	// mobility,
								5,	// globalPresence,
								2,	// toughness,
								8,	// initiation,
								2,	// zoneDisplace
								10	// mercs
							)
						);

		var jaina = new Hero(
							"Jaina",
							ranged,
							assassin,
							new StatBlock(
								5,	// sustainedDamage,
								10,	// burstDamage,
								0,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								1,	// shields,
								8,	// lanePush,
								10,	// slowRootSilence,
								10,	// poke,
								5,	// mobility,
								2,	// globalPresence,
								3,	// toughness,
								7,	// initiation,
								8,	// zoneDisplace
								8	// mercs
							)
						);

		var kaelthas = new Hero(
							"Kael'thas",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								9,	// burstDamage,
								7,	// lockdown,
								1,	// sustainedHeal,
								0,	// burstHeal,
								1,	// shields,
								7,	// lanePush,
								0,	// slowRootSilence,
								9,	// poke,
								3,	// mobility,
								2,	// globalPresence,
								3,	// toughness,
								4,	// initiation,
								8,	// zoneDisplace
								6	// mercs
							)
						);

		var kerrigan = new Hero(
							"Kerrigan",
							melee,
							assassin,
							new StatBlock(
								7,	// sustainedDamage,
								8,	// burstDamage,
								7,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								5,	// shields,
								7,	// lanePush,
								2,	// slowRootSilence,
								6,	// poke,
								5,	// mobility,
								2,	// globalPresence,
								5,	// toughness,
								5,	// initiation,
								3,	// zoneDisplace
								7	// mercs
							)
						);

		var lili = new Hero(
							"Li Li",
							ranged,
							support,
							new StatBlock(
								3,	// sustainedDamage,
								1,	// burstDamage,
								0,	// lockdown,
								8,	// sustainedHeal,
								4,	// burstHeal,
								1,	// shields,
								3,	// lanePush,
								2,	// slowRootSilence,
								3,	// poke,
								6,	// mobility,
								2,	// globalPresence,
								2,	// toughness,
								4,	// initiation,
								2,	// zoneDisplace
								5	// mercs
							)
						);

		var thelostvikings = new Hero(
							"The Lost Vikings",
							melee,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								7,	// burstDamage,
								0,	// lockdown,
								4,	// sustainedHeal,
								0,	// burstHeal,
								5,	// shields,
								7,	// lanePush,
								0,	// slowRootSilence,
								5,	// poke,
								6,	// mobility,
								8,	// globalPresence,
								2,	// toughness,
								3,	// initiation,
								7,	// zoneDisplace
								7	// mercs
							)
						);

		var malfurion = new Hero(
							"Malfurion",
							ranged,
							support,
							new StatBlock(
								3,	// sustainedDamage,
								4,	// burstDamage,
								0,	// lockdown,
								8,	// sustainedHeal,
								6,	// burstHeal,
								2,	// shields,
								4,	// lanePush,
								8,	// slowRootSilence,
								5,	// poke,
								4,	// mobility,
								2,	// globalPresence,
								4,	// toughness,
								5,	// initiation,
								4,	// zoneDisplace
								5	// mercs
							)
						);

		var muradin = new Hero(
							"Muradin",
							melee,
							warrior,
							new StatBlock(
								7,	// sustainedDamage,
								6,	// burstDamage,
								9,	// lockdown,
								5,	// sustainedHeal,
								1,	// burstHeal,
								3,	// shields,
								6,	// lanePush,
								8,	// slowRootSilence,
								6,	// poke,
								4,	// mobility,
								2,	// globalPresence,
								6,	// toughness,
								7,	// initiation,
								5,	// zoneDisplace
								7	// mercs
							)
						);

		var murky = new Hero(
							"Murky",
							melee,
							specialist,
							new StatBlock(
								3,	// sustainedDamage,
								4,	// burstDamage,
								7,	// lockdown,
								5,	// sustainedHeal,
								1,	// burstHeal,
								8,	// shields,
								6,	// lanePush,
								5,	// slowRootSilence,
								8,	// poke,
								7,	// mobility,
								4,	// globalPresence,
								1,	// toughness,
								6,	// initiation,
								6,	// zoneDisplace
								7	// mercs
							)
						);

		var nazeebo = new Hero(
							"Nazeebo",
							ranged,
							specialist,
							new StatBlock(
								7,	// sustainedDamage,
								5,	// burstDamage,
								0,	// lockdown,
								2,	// sustainedHeal,
								0,	// burstHeal,
								1,	// shields,
								6,	// lanePush,
								2,	// slowRootSilence,
								5,	// poke,
								5,	// mobility,
								2,	// globalPresence,
								5,	// toughness,
								5,	// initiation,
								7,	// zoneDisplace
								7	// mercs
							)
						);

		var nova = new Hero(
							"Nova",
							ranged,
							assassin,
							new StatBlock(
								2,	// sustainedDamage,
								8,	// burstDamage,
								1,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								1,	// shields,
								2,	// lanePush,
								4,	// slowRootSilence,
								3,	// poke,
								7,	// mobility,
								6,	// globalPresence,
								2,	// toughness,
								6,	// initiation,
								6,	// zoneDisplace
								4	// mercs
							)
						);

		var raynor = new Hero(
							"Raynor",
							ranged,
							assassin,
							new StatBlock(
								8,	// sustainedDamage,
								6,	// burstDamage,
								6,	// lockdown,
								2,	// sustainedHeal,
								5,	// burstHeal,
								0,	// shields,
								6,	// lanePush,
								1,	// slowRootSilence,
								6,	// poke,
								6,	// mobility,
								2,	// globalPresence,
								4,	// toughness,
								4,	// initiation,
								6,	// zoneDisplace
								7	// mercs
							)
						);

		var rehgar = new Hero(
							"Rehgar",
							melee,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								0,	// lockdown,
								8,	// sustainedHeal,
								10,	// burstHeal,
								4,	// shields,
								4,	// lanePush,
								4,	// slowRootSilence,
								2,	// poke,
								5,	// mobility,
								4,	// globalPresence,
								6,	// toughness,
								4,	// initiation,
								4,	// zoneDisplace
								6	// mercs
							)
						);

		var sgthammer = new Hero(
							"Sgt. Hammer",
							ranged,
							specialist,
							new StatBlock(
								7,	// sustainedDamage,
								4,	// burstDamage,
								1,	// lockdown,
								1,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								5,	// lanePush,
								0,	// slowRootSilence,
								4,	// poke,
								1,	// mobility,
								2,	// globalPresence,
								4,	// toughness,
								1,	// initiation,
								4,	// zoneDisplace
								7	// mercs
							)
						);

		var sonya = new Hero(
							"Sonya",
							melee,
							warrior,
							new StatBlock(
								7,	// sustainedDamage,
								8,	// burstDamage,
								6,	// lockdown,
								3,	// sustainedHeal,
								1,	// burstHeal,
								0,	// shields,
								7,	// lanePush,
								2,	// slowRootSilence,
								4,	// poke,
								6,	// mobility,
								2,	// globalPresence,
								6,	// toughness,
								6,	// initiation,
								1,	// zoneDisplace
								9	// mercs
							)
						);

		var stitches = new Hero(
							"Stitches",
							melee,
							warrior,
							new StatBlock(
								3,	// sustainedDamage,
								4,	// burstDamage,
								3,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								4,	// lanePush,
								6,	// slowRootSilence,
								4,	// poke,
								4,	// mobility,
								1,	// globalPresence,
								6,	// toughness,
								7,	// initiation,
								8,	// zoneDisplace
								6	// mercs
							)
						);

		var sylvanas = new Hero(
							"Sylvanas",
							ranged,
							specialist,
							new StatBlock(
								7,	// sustainedDamage,
								5,	// burstDamage,
								0,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								10,	// lanePush,
								10,	// slowRootSilence,
								8,	// poke,
								8,	// mobility,
								2,	// globalPresence,
								4,	// toughness,
								2,	// initiation,
								2,	// zoneDisplace
								7	// mercs
							)
						);

		var tassadar = new Hero(
							"Tassadar",
							ranged,
							support,
							new StatBlock(
								5,	// sustainedDamage,
								6,	// burstDamage,
								0,	// lockdown,
								3,	// sustainedHeal,
								1,	// burstHeal,
								10,	// shields,
								5,	// lanePush,
								2,	// slowRootSilence,
								6,	// poke,
								8,	// mobility,
								2,	// globalPresence,
								3,	// toughness,
								3,	// initiation,
								4,	// zoneDisplace
								6	// mercs
							)
						);

		var thrall = new Hero(
							"Thrall",
							melee,
							assassin,
							new StatBlock(
								7,	// sustainedDamage,
								7,	// burstDamage,
								7,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								7,	// lanePush,
								7,	// slowRootSilence,
								6,	// poke,
								6,	// mobility,
								1,	// globalPresence,
								8,	// toughness,
								5,	// initiation,
								2,	// zoneDisplace
								7	// mercs
							)
						);

		var tychus = new Hero(
							"Tychus",
							ranged,
							assassin,
							new StatBlock(
								7,	// sustainedDamage,
								7,	// burstDamage,
								0,	// lockdown,
								1,	// sustainedHeal,
								2,	// burstHeal,
								2,	// shields,
								7,	// lanePush,
								3,	// slowRootSilence,
								7,	// poke,
								6,	// mobility,
								1,	// globalPresence,
								6,	// toughness,
								5,	// initiation,
								6,	// zoneDisplace
								8	// mercs
							)
						);

		var tyrael = new Hero(
							"Tyrael",
							melee,
							warrior,
							new StatBlock(
								8,	// sustainedDamage,
								5,	// burstDamage,
								8,	// lockdown,
								4,	// sustainedHeal,
								3,	// burstHeal,
								6,	// shields,
								5,	// lanePush,
								7,	// slowRootSilence,
								5,	// poke,
								9,	// mobility,
								4,	// globalPresence,
								6,	// toughness,
								9,	// initiation,
								8,	// zoneDisplace
								7	// mercs
							)
						);

		var tyrande = new Hero(
							"Tyrande",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								7,	// burstDamage,
								7,	// lockdown,
								2,	// sustainedHeal,
								5,	// burstHeal,
								2,	// shields,
								5,	// lanePush,
								6,	// slowRootSilence,
								6,	// poke,
								5,	// mobility,
								4,	// globalPresence,
								4,	// toughness,
								5,	// initiation,
								6,	// zoneDisplace
								6	// mercs
							)
						);

		var uther = new Hero(
							"Uther",
							melee,
							support,
							new StatBlock(
								5,	// sustainedDamage,
								6,	// burstDamage,
								7,	// lockdown,
								8,	// sustainedHeal,
								9,	// burstHeal,
								7,	// shields,
								4,	// lanePush,
								2,	// slowRootSilence,
								6,	// poke,
								6,	// mobility,
								1,	// globalPresence,
								4,	// toughness,
								5,	// initiation,
								2,	// zoneDisplace
								6	// mercs
							)
						);

		var valla = new Hero(
							"Valla",
							ranged,
							assassin,
							new StatBlock(
								10,	// sustainedDamage,
								4,	// burstDamage,
								2,	// lockdown,
								1,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								7,	// lanePush,
								5,	// slowRootSilence,
								9,	// poke,
								9,	// mobility,
								1,	// globalPresence,
								2,	// toughness,
								2,	// initiation,
								2,	// zoneDisplace
								7	// mercs
							)
						);

		var zagara = new Hero(
							"Zagara",
							ranged,
							specialist,
							new StatBlock(
								8,	// sustainedDamage,
								5,	// burstDamage,
								70,	// lockdown,
								2,	// sustainedHeal,
								0,	// burstHeal,
								0,	// shields,
								10,	// lanePush,
								8,	// slowRootSilence,
								9,	// poke,
								7,	// mobility,
								1,	// globalPresence,
								4,	// toughness,
								5,	// initiation,
								7,	// zoneDisplace
								7	// mercs
							)
						);

		var zeratul = new Hero(
							"Zeratul",
							melee,
							assassin,
							new StatBlock(
								3,	// sustainedDamage,
								8,	// burstDamage,
								7,	// lockdown,
								0,	// sustainedHeal,
								0,	// burstHeal,
								5,	// shields,
								3,	// lanePush,
								5,	// slowRootSilence,
								4,	// poke,
								10,	// mobility,
								1,	// globalPresence,
								2,	// toughness,
								2,	// initiation,
								8,	// zoneDisplace
								6	// mercs
							)
						);

		var heroData = [
			abathur,
			anubarak,
			arthas,
			azmodan,
			brightwing,
			chen,
			diablo,
			etc,
			falstad,
			gazlowe,
			illidan,
			jaina,
			kaelthas,
			kerrigan,
			lili,
			thelostvikings,
			malfurion,
			muradin,
			murky,
			nazeebo,
			nova,
			raynor,
			rehgar,
			sgthammer,
			sonya,
			stitches,
			sylvanas,
			tassadar,
			thrall,
			tychus,
			tyrael,
			tyrande,
			uther,
			valla,
			zagara,
			zeratul
		];

		var highlightedHero = null;

		return {
			getAllHeroData: function () {
				return heroData;
			},

			setHighlightedHero: function(hero) {
				console.log('highlighted: ' + hero.name);
				highlightedHero = hero;
			},

			getHighlightedHero: function() {
				return highlightedHero;
			}
		};
	}]);
})();
