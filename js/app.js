

function sub(a)
{
    a=0

    if (a > 0)
    {
        a=0
    }
    else
    {
        return a - 1
    }

}

function main()
{
    let less=document.querySelector(".less")
    less.addEventListener("click", sub)


}
main();