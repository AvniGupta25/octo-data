---
title: Codeblock
sidebar_position: 8
---

```jsx title="Sample Codeblock" showLineNumbers
function Greetings(props){
    return <p>Welcome, {props.userName}!</p>
}

export default Greetings;
```

```jsx title="Highlight Lines" {4,11} showLineNumbers
function HighlightText(highlight){
    if(highlight){
        //hightlight-next-line
    return 'This text is hightlighted!';
    }
    return 'Nothing hghlighted';
}

function HighlightMoreText(highlight){
    if(highlight){
        return 'This range is hightlighted!';
    }
    return 'Nothing hghlighted';
}
```