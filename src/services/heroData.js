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
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var arthas = new Hero(
							"Arthas",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var azmodan = new Hero(
							"Azmodan",
							ranged,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var brightwing = new Hero(
							"Brightwing",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var chen = new Hero(
							"Chen",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var diablo = new Hero(
							"Diablo",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var etc = new Hero(
							"E.T.C.",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var falstad = new Hero(
							"Falstad",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var gazlowe = new Hero(
							"Gazlowe",
							melee,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var illidan = new Hero(
							"Illidan",
							melee,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var jaina = new Hero(
							"Jaina",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var kaelthas = new Hero(
							"Kael'thas",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var kerrigan = new Hero(
							"Kerrigan",
							melee,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var lili = new Hero(
							"Li Li",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var thelostvikings = new Hero(
							"The Lost Vikings",
							melee,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var malfurion = new Hero(
							"Malfurion",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var muradin = new Hero(
							"Muradin",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var murky = new Hero(
							"Murky",
							melee,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var nazeebo = new Hero(
							"Nazeebo",
							ranged,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var nova = new Hero(
							"Nova",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var raynor = new Hero(
							"Raynor",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var rehgar = new Hero(
							"Rehgar",
							melee,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var sgthammer = new Hero(
							"Sgt. Hammer",
							ranged,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var sonya = new Hero(
							"Sonya",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var stitches = new Hero(
							"Stitches",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var sylvanas = new Hero(
							"Sylvanas",
							ranged,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var tassadar = new Hero(
							"Tassadar",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var thrall = new Hero(
							"Thrall",
							melee,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var tychus = new Hero(
							"Tychus",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var tyrael = new Hero(
							"Tyrael",
							melee,
							warrior,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var tyrande = new Hero(
							"Tyrande",
							ranged,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var uther = new Hero(
							"Uther",
							melee,
							support,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var valla = new Hero(
							"Valla",
							ranged,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var zagara = new Hero(
							"Zagara",
							ranged,
							specialist,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
							)
						);

		var zeratul = new Hero(
							"Zeratul",
							melee,
							assassin,
							new StatBlock(
								6,	// sustainedDamage,
								4,	// burstDamage,
								10,	// lockdown,
								3,	// sustainedHeal,
								0,	// burstHeal,
								3,	// shields,
								3,	// lanePush,
								7,	// slowRootSilence,
								3,	// poke,
								3,	// mobility,
								3,	// globalPresence,
								4,	// toughness,
								6,	// initiation,
								8,	// zoneDisplace
								3	// mercs
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
