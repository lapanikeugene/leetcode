/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1 //a custom class that represents a single node in a singly linked list. 
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0; // will contain digits that will varry over to other node > 10 => 1 to carry 0 in node. 
    let result = new ListNode(0); //dummy node, avoid special checking if result null.   
    let current = result;

    while(l1 || l2 || carry){

        const sum = (l1? l1.val : 0 ) + // if l1 exists that l1.val 
                    (l2? l2.val : 0 ) + 
                    carry
            carry = Math.floor(sum/10);

        //creating a new Node > 12 %10 = node with value 2
        current.next = new ListNode(sum%10);
        
        
        //update pointer of current: 
        current = current.next;
        l1 = l1 && l1.next; // next if l1 exists; 
        l2 = l2 && l2.next; // next if l1 exists; 

    }

    return result.next; 

};