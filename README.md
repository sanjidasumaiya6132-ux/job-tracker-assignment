 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: These methods are used to select elements from the HTML. getElementById is used to find a single element using its unique ID; it is the fastest way to grab an element. getElementsByClassName is used to select all elements that share the same class name, and it returns an HTMLCollection. querySelector is more flexible because it uses CSS selectors (like .class or #id) to find the first matching element. If we need to find all elements that match a CSS selector, we use querySelectorAll, which returns a NodeList.

2. How do you create and insert a new element into the DOM?
Ans: Adding a new element to the DOM involves three main steps. First, we create the element using document.createElement() (for example, creating a 'div' or a 'p' tag). Second, we add content to it by using properties like innerText or innerHTML. Finally, we insert it into the page by using appendChild() or prepend() to attach it to an existing parent element so it becomes visible.

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a process in JavaScript where an event starts from the specific element that was triggered (the child) and then "bubbles up" through its parent elements in the DOM tree. For example, if you click a button inside a div, the click event first triggers on the button, then moves to the div, then to the body, and eventually all the way up to the document level. It works like a bubble rising from the bottom to the top.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique where instead of adding individual event listeners to many child elements, we add a single listener to their common parent. It is very useful because it improves performance by using less memory. It is especially helpful for dynamic content; if we add new child elements to the list later, we don’t need to add new listeners to them because the parent element is already handling the events for all its children.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: Although they sound similar, they do different things. preventDefault() is used to stop the browser's default behavior for an element, such as stopping a link from opening a URL or a form from refreshing the page on submit. On the other hand, stopPropagation() is used to stop the event from bubbling up the DOM tree. This means it prevents the parent elements from ever knowing that the event happened on the child element.