import mentor from '../../api/src/models/db';
import user from '../../api/src/models/db';
import session from '../../api/src/models/db';

class LinkedList {
    construct() {
      this.head = null;
 }
addToUser() {
    const newNode = new user(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
addToMentor() {
    const newNode = new mentor(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
addToSession() {
    const newNode = new session(this.head);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
// locating items to use for validations
find(id) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.data.id === id) return thisNode.data;
      thisNode = thisNode.next;
    }
    return thisNode;
  }
checkCreds() {
    let thisNode = this.head;
    if (args.length === 2) {
    while (thisNode) {
      if (thisNode.data.email === [0] && thisNode.data.password === [1]) {
        return { bool: true, node: thisNode.data };
      }
      node = thisNode.next;
      }
      return { bool: false, node: null };
      }
    while (thisNode) {
    if (thisNode.data.id === [0]) return { bool: true, node: thisNode.data };
      node = thisNode.next;
    }
    return { bool: false, node: null };
    }
  
Email(email) {
    let thisNode = this.head;
    while (thisNode) {
    if (thisNode.data.email === email) return  thisNode.data ;
    thisNode = thisnode.next;
    }
    return false;
  }
}
const newUser = new LinkedList();

export default  {
  LinkedList,
  newUser
};