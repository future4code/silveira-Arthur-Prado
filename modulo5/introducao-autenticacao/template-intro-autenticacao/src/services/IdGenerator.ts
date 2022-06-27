import {v4} from "uuid"

export class IdGenerator {
    gerenateId = () => {
        return v4()
    }
}