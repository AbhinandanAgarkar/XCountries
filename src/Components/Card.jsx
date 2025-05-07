

export default function Card({country, flag}){
 return(
    <>
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        flexWrap:"wrap",
        width:'180px',
        height:'auto',
        padding:'10px',
        border:'1px solid grey',
        borderRadius:'10px'
    }}>
        <img style={{
            width:'130px',
            height:'100px',
            border:'0.5px solid grey',
        }} src={flag} alt={country} />
        <h2>{country}</h2>
    </div>
    </>
 )
}