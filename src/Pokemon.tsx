import React from 'react'
import { useGetPokemonByNameQuery } from './services/pokemon'
const Pokemon=({name,pollingInterval}:{
    name:string;
    pollingInterval:number
})=>{
    const {data,error,isLoading,isFetching}=useGetPokemonByNameQuery(name,{pollingInterval})
    return <div>
        {error? (<>Oh no ,there was an err</>):isLoading?(<>Loading...</>):data?(<>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name}  />
        </>):null}
    </div>
}
export default Pokemon