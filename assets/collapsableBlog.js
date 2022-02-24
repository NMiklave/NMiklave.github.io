/*
To use: Make a list, in each <li> element, include a <span> (to be clicked on)
        and a <p> that will have its display be toggled.
*/

var allSpan = document.getElementsByTagName('span');

for(var x = 0; x < allSpan.length; x++)
{
    allSpan[x].onclick=function()
    {
        if(this.parentNode)
        {
            var childList = this.parentNode.getElementsByTagName('p');
            for(var y = 0; y< childList.length;y++)
						{
    					var currentState = childList[y].style.display;
    					if(currentState=="block")
    					{
        				childList[y].style.display="none";
    					}
    					else
    					{
        				childList[y].style.display="block";
    					}
            }
				}
    }
}
