const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    
    
    title: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    Email_id: String,
    Website: String,
    Address: String,
    City: String,
    Country: String,
    zip_code: String,
    Age: String,

    //Previous Job
        company_name: String,
        website: String,
        country: String,
        city: String,
        phone: String,
        designation : String,
        from: String,
        to: String,
  
    //Education
    Degree: String,
    Be_year:String,
    College: String,
    University: String,
    Branch:String,
    Project: String,
    Project_description:String,
    Award_be: String,
    Awardbe_by: String,
    twlth: String,
    Board_12: String,
    Award_12: String,
    College_12: String,
    tnth: String,
    Board_10: String,
    School: String,

            //language
        language1:String,
        language2:String,
        language3:String,
        language4:String,
        language5:String,

    //interests
    interest1: String,
    interest2: String,
    interest3: String,
    interest4: String,
    my_number: String,
    summery: String,
    proed_role: String,

    //Projects
        project1: String,
        project1_desc: String,
        project2: String,
        project2_desc: String,
        project3: String,
        project3_desc: String,
        project4: String,
        project4_desc: String,

    tech_skill1:String,
    tech_skill2: String,
    tech_skill3:String,
    tech_skill4:String,
    tech_skill5:String,
    proed_role2: String
    

});

module.exports = mongoose.model('post', postSchema);