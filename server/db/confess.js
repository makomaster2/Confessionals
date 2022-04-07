//This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!

import { Query } from "./index";
//ADHD 
const ADHD_all = () => Query("select * from ADHD");
const ADHD_one = (ADHD_id) => Query("select * from ADHD where ADHD.ADHD_id = ?", [ADHD_id]);
const ADHD_destroy = (ADHD_id) => Query("delete from ADHD where ADHD.ADHD_id = ?", [ADHD_id]);
const ADHD_insert = (ADHD_id, ADHDpost) => Query("insert into ADHD (ADHD_id, ADHDpost) values (?, ?)", [ADHD_id, ADHDpost]);
const ADHD_edit = (ADHD_id, ADHDpost) => Query("UPDATE ADHD SET ADHDpost = ? WHERE ADHD.ADHD_id = ?", [ADHDpost, ADHD_id]);
//Depression 
const Depression_all = () => Query("select * from Depression");
const Depression_one = (Depression_id) => Query("select * from Depression where Depression.Depression_id = ?", [Depression_id]);
const Depression_destroy = (Depression_id) => Query("delete from Depression where Depression.Depression_id = ?", [Depression_id]);
const Depression_insert = (Depression_id, Depression_post) => Query("insert into Depression (Depression_id, Depression_post) values (?, ?)", [Depression_id, Depression_post]);
const Depression_edit = (Depression_id, Depression_post) => Query("UPDATE Depression SET Depression_post = ? WHERE Depression.Depression_id = ?", [Depression_post, Depression_id]);
//Rage 
const Rage_all = () => Query("select * from Rage");
const Rage_one = (Rage_id) => Query("select * from Rage where Rage.Rage_id = ?", [Rage_id]);
const Rage_destroy = (Rage_id) => Query("delete from Rage where Rage.Rage_id = ?", [Rage_id]);
const Rage_insert = (Rage_id, Rage_post) => Query("insert into Rage (Rage_id, Rage_post) values (?, ?)", [Rage_id, Rage_post]);
const Rage_edit = (Rage_id, Rage_post) => Query("UPDATE Rage SET Rage_post = ? WHERE Rage.Rage_id = ?", [Rage_post, Rage_id]);
//Anxiety 
const Anxiety_all = () => Query("select * from Anxiety");
const Anxiety_one = (Anxiety_id) => Query("select * from Anxiety where Anxiety.Anxiety_id = ?", [Anxiety_id]);
const Anxiety_destroy = (Anxiety_id) => Query("delete from Anxiety where Anxiety.Anxiety_id = ?", [Anxiety_id]); 
const Anxiety_insert = (Anxiety_id, Anxiety_post) => Query("insert into Anxiety (Anxiety_id, Anxiety_post) values (?, ?)", [Anxiety_id, Anxiety_post]);
const Anxiety_edit = (Anxiety_id, Anxiety_post) => Query("UPDATE Anxiety SET Anxiety_post = ? WHERE Anxiety.Anxiety_id = ?", [Anxiety_post, Anxiety_id]);
//Users 
const Users_all = () => Query("select * from Users");
const Users_one = (User_id) => Query("select * from Users where Users.User_id = ?", [User_id]);










   
      
// this becomes chirps in db/index.js and routes/chirps.js
export default {
    ADHD_all,
    Depression_all,
    Rage_all,
    Anxiety_all,
    Users_all,
    ADHD_one,
    Depression_one,
    Rage_one,
    Anxiety_one,
    Users_one,
    ADHD_destroy,
    Depression_destroy,
    Rage_destroy,
    Anxiety_destroy,
    ADHD_insert,
    Depression_insert,
    Rage_insert,
    Anxiety_insert,
    ADHD_edit,
    Depression_edit,
    Rage_edit,
    Anxiety_edit
} 
  