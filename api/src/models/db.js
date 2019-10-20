import moment from 'moment';
import uuid from 'uuid';

class mentor {
    constructor(mentorId, mentorEmail, firstName, lastName, password, address, bio, occupation, expertise){
        this.dbs = []; {
            this.mentorId = parseInt();
            this.mentorEmail = mentorEmail;
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.address = address;
            this.bio = bio;
            this.occupation = occupation;
            this.expertise = this.expertise
    }
    }

}
class user {
    constructor(menteeId, menteeEmail, firstName, lastName, password, address, status){
        this.dbs = []; {
            this.userId = parseInt();
            this.menteeEmail = menteeEmail;
            this.firstName = firstName;
            this.lastName = lastName;
            this.password = password;
            this.address = address;
        }
    }
}
 class sessions {
     constructor(sessionId, mentorId, menteeId, score, menteeFullName, remark){
         this.dbs = []; {
             this.sessionId = parseInt();
             this.userId = parseInt();
             this.mentorId = mentorId;
             this.score = parseInt();
             this.menteeFullName = menteeFullName;
             this.remark = remark;
         }
     }
 }

export default {
    user, 
    mentor,
    sessions
} 