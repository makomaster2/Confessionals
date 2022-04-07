//This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!

import { Query } from "./index";

const all = () => Query("select * from ADHD");
const all2 = () => Query("select * from Depression");
const all3 = () => Query("select * from Rage");
const all4 = () => Query("select * from Anxiety");
const all5 = () => Query("select * from Users");


const one = (ADHD_id) => Query("select * from ADHD where ADHD.ADHD_id = ?", [ADHD_id]);
const two = (Depression_id) => Query("select * from Depression where Depression.Depression_id = ?", [Depression_id]);
const three = (Rage_id) => Query("select * from Rage where Rage.Rage_id = ?", [Rage_id]);
const four = (Anxiety_id) => Query("select * from Anxiety where Anxiety.Anxiety_id = ?", [Anxiety_id]);
const five = (User_id) => Query("select * from Users where Users.User_id = ?", [User_id]);




const destroy = (ADHD_id) => Query("delete from ADHD where ADHD.ADHD_id = ?", [ADHD_id]);
const destroy2 = (Depression_id) => Query("delete from Depression where Depression.Depression_id = ?", [Depression_id]);
const destroy3 = (Rage_id) => Query("delete from Rage where Rage.Rage_id = ?", [Rage_id]);
const destroy4 = (Anxiety_id) => Query("delete from Anxiety where Anxiety.Anxiety_id = ?", [Anxiety_id]); 


const insert = (ADHD_id, ADHDpost) => Query("insert into ADHD (ADHD_id, ADHDpost) values (?, ?)", [ADHD_id, ADHDpost]);
const insert2 = (Depression_id, Depression_post) => Query("insert into Depression (Depression_id, Depression_post) values (?, ?)", [Depression_id, Depression_post]);
const insert3 = (Rage_id, Rage_post) => Query("insert into Rage (Rage_id, Rage_post) values (?, ?)", [Rage_id, Rage_post]);
const insert4 = (Anxiety_id, Anxiety_post) => Query("insert into Anxiety (Anxiety_id, Anxiety_post) values (?, ?)", [Anxiety_id, Anxiety_post]);


const edit = (ADHD_id, ADHDpost) => Query("UPDATE ADHD SET ADHDpost = ? WHERE ADHD.ADHD_id = ?", [ADHDpost, ADHD_id]);
const edit2 = (Depression_id, Depression_post) => Query("UPDATE Depression SET Depression_post = ? WHERE Depression.Depression_id = ?", [Depression_post, Depression_id]);
const edit3 = (Rage_id, Rage_post) => Query("UPDATE Rage SET Rage_post = ? WHERE Rage.Rage_id = ?", [Rage_post, Rage_id]);
const edit4 = (Anxiety_id, Anxiety_post) => Query("UPDATE Anxiety SET Anxiety_post = ? WHERE Anxiety.Anxiety_id = ?", [Anxiety_post, Anxiety_id]);
   
      
// this becomes chirps in db/index.js and routes/chirps.js
export default {
    all,
    all2,
    all3,
    all4,
    all5,
    one,
    two,
    three,
    four,
    five,
    destroy,
    destroy2,
    destroy3,
    destroy4,
    insert,
    insert2,
    insert3,
    insert4,
    edit,
    edit2,
    edit3,
    edit4
} 
  