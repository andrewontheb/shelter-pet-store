export interface IPetList {
    id: number | null
    title: string
    description?: string
    date: Date
    status: ICardStatus
    img: string
    location: string
}

export type ICardStatus = 'found' | 'lost' | 'free' | 'all'

export type Animal = 'dog' | 'cat' | 'other'

export type IPet = {
    _id?: number
    type: Animal
    photo: string
    breed: string
    color: string
    age: number | null
    name: string
    description: string
    status: ICardStatus
    phone: string | number
}

export interface IProps {
    pet: IPet
    onPetDelete: (id: number) => Promise<boolean>
    key: number
}

export interface IFilterProps {
    activeFilter: ICardStatus,
    onFilterChange: (status: ICardStatus) => void
}
