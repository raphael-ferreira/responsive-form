import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api'

export type MakeType = {
	ID: string
	Name: string
}

export const getMakes = () => axios.get('/make-list.json')
