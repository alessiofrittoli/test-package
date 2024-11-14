import type { Persona } from './types'

export const sayHello = ( { firstName, lastName }: Persona ) => {
	console.log( 'Howdy', `${ firstName }!` )
}