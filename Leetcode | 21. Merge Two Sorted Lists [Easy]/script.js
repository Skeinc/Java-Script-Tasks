/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/
let mergeTwoLists = function(list1, list2) {
    // Решение
    let temp = new ListNode(0, null);
    let result = temp;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            result.next = list1;
            list1 = list1.next;
        }
        else {
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
    }
    result.next = list1 || list2;
    return temp.next;
};