// Explain the concept of event bubbling and event capturing in JavaScript.

//Answer: Event bubbling and event capturing are two mechanisms that describe how events propagate in the DOM. When an event is triggered on an element, it can "bubble" up the DOM tree or "capture" down the DOM tree.

// Event Bubbling:
// In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. This means that the event starts from the target element and bubbles up to the root of the document.

// Event Capturing:

// In event capturing, the event is first captured by the outermost element and then propagated to the inner elements. This means that the event starts from the root of the document and captures down to the target element.

// Event bubbling is the default behavior in most browsers, but event capturing can also be used by setting the third parameter of the addEventListener method to true.

// Event bubbling and capturing are important concepts to understand when working with event handling in JavaScript, as they can affect how events are handled and propagated in the DOM tree. By understanding these mechanisms, developers can better control the flow of events and handle them more effectively.
