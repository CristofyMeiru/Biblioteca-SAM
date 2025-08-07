import * as contract from './books.service.contract'

export const create: contract.create = async (authors_repo, book_repo)=> {

    const author_exists = await authors_repo.find_unique()
    
}