
import Card from './Card'

function Page({Places,removePlace}){
    return(
        <div className='container'>
            <h2 className='title'>Plan With Friends </h2>

            <div className='cards'>
                {
                    Places.map((Place)=>{
                        return <Card key={Place.id} {...Place} removePlace={removePlace}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Page;