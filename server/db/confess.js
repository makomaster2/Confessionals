//This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!

import { Query } from "./index";
//adhd 
const ADHD_all = () => Query("select * from adhd");
const ADHD_one = (adhd_id) => Query("select * from adhd where adhd.adhd_id = ?", [adhd_id]);
const ADHD_destroy = (adhd_id) => Query("delete from adhd where adhd.adhd_id = ?", [adhd_id]);
const ADHD_insert = (adhd_id, adhd_post) => Query("insert into adhd (adhd_id, adhdpost) values (?, ?)", [adhd_id, adhd_post]);
const ADHD_edit = (adhd_id, adhd_post) => Query("UPDATE adhd SET adhdpost = ? WHERE adhd.adhd_id = ?", [adhd_post, adhd_id]);
//depression 
const Depression_all = () => Query("select * from depression");
const Depression_one = (depression_id) => Query("select * from depression where depression.depression_id = ?", [depression_id]);
const Depression_destroy = (depression_id) => Query("delete from depression where depression.depression_id = ?", [depression_id]);
const Depression_insert = (depression_id, depression_post) => Query("insert into depression (depression_id, depression_post) values (?, ?)", [depression_id, depression_post]);
const Depression_edit = (depression_id, depression_post) => Query("UPDATE depression SET depression_post = ? WHERE depression.depression_id = ?", [depression_post, depression_id]);
//rage 
const Rage_all = () => Query("select * from rage");
const Rage_one = (rage_id) => Query("select * from rage where rage.rage_id = ?", [rage_id]);
const Rage_destroy = (rage_id) => Query("delete from rage where rage.rage_id = ?", [rage_id]);
const Rage_insert = (rage_id, rage_post) => Query("insert into rage (rage_id, rage_post) values (?, ?)", [rage_id, rage_post]);
const Rage_edit = (rage_id, rage_post) => Query("UPDATE rage SET rage_post = ? WHERE rage.rage_id = ?", [rage_post, rage_id]);
//anxiety 
const Anxiety_all = () => Query("select * from anxiety");
const Anxiety_one = (anxiety_id) => Query("select * from anxiety where anxiety.anxiety_id = ?", [anxiety_id]);
const Anxiety_destroy = (anxiety_id) => Query("delete from anxiety where anxiety.anxiety_id = ?", [anxiety_id]); 
const Anxiety_insert = (anxiety_id, anxiety_post) => Query("insert into anxiety (anxiety_id, anxiety_post) values (?, ?)", [anxiety_id, anxiety_post]);
const Anxiety_edit = (anxiety_id, anxiety_post) => Query("UPDATE anxiety SET anxiety_post = ? WHERE anxiety.anxiety_id = ?", [anxiety_post, anxiety_id]);
//users 
const Users_all = () => Query("select * from users");
const Users_one = (User_id) => Query("select * from users where users.User_id = ?", [user_id]);










   
      
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
  