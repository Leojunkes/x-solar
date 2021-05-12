// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
 const users = [
   {id:1, name:'Leo'},
   {id:2, name:'Gabi'},
   {id:3, name:'Camila'},

 ]
 return res.json(users)
}
