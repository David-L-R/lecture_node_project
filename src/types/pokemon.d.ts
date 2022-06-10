export interface Ability {
	ability: { name: string; url: string }
	is_hidden: false
	slot: 1
}

export interface Move {
	level_learned_at: number
	move_learn_method: { name: string; url: string }
	version_group: { name: string; url: string }
}

type PokemonPreview = Pick<Pokemon, 'name'> & { url: string }

export interface Pokemon {
	id: number
	abilities: Ability[]
	height: number
	moves: [
		{
			move: { name: string; url: string }
			version_group_details: Move[]
		},
	]
	name: string
	sprites: {
		back_default: string | null
		back_female: string | null
		back_shiny: string | null
		back_shiny_female: string | null
		front_default: string | null
		front_female: string | null
		front_shiny: string | null
		front_shiny_female: string | null
		other: {
			dream_world: {
				front_default: string | null
				front_female: string | null
			}
			home: {
				front_default: string | null
				front_female: string | null
				front_shiny: string | null
				front_shiny_female: string | null
			}
			'official-artwork': {
				front_default: string
			}
		}
	}
	stats: [
		{ base_stat: number; effort: number; stat: { name: 'hp'; url: string } },
		{ base_stat: number; effort: number; stat: { name: 'attack'; url: string } },
		{ base_stat: number; effort: number; stat: { name: 'defense'; url: string } },
		{ base_stat: number; effort: number; stat: { name: 'special-attack'; url: string } },
		{ base_stat: number; effort: number; stat: { name: 'special-defense'; url: string } },
		{ base_stat: number; effort: number; stat: { name: 'speed'; url: string } },
	]
	weight: number
	[key?: string]: unknown
}
