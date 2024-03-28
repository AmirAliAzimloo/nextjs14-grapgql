"use client";

import { AlbumsPage } from "@/libs/grapghql/graphqlTypes/graphql";
import { useAddAlbumMutation, useGetAlbumsQuery } from "../../generated-types";




const Albums = () => {

  const { data , refetch } = useGetAlbumsQuery();
  const [ addAlbum ,{ loading } ] = useAddAlbumMutation({
    variables:{
      input:{
        title:"test",
        userId:"1"
      }
    }
  });

  return (
    <>
      <div>
        {
          data?.albums?.data?.map((album, index: number) => (
            <div key={index}>
              {album?.title}
            </div>
          ))
        }
      </div>
      <div className="bg-green-700">
        <button onClick={()=>{
          addAlbum();
          refetch();
          }} className="text-red-700">add new user</button>
      </div>
    </>
  )
}

export default Albums
