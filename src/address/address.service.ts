
import { AddressRepository } from "./address.repository";
import { AddressServiceContract } from "./address.types";


export const AddressService: AddressServiceContract = {
    createAddress: (data) => {
        return AddressRepository.createAddress(data);
    },
}
