---
title: "New Admin Experience"
date: 2022-01-17
id: 4
desc: My admin page is much safer now
tag: 
---

I rebuild my Admin Page on my website. Now it's musch safer with firebase Authentication. 

Visitors can try to login, but if they're account is not defined as an "admin" they can't modified and create a post, just logged in and had nothing todo. You can go to `/admin`.

<br>

The verification is rather simple, here's how I do it :
````
// declare a variable
const isAdmin = user.uid === <my-uid>

// return in the component
const Admin = () => {
    return (
        <div>
            {isAdmin ? (
                <>
                    <AdminPanel>
                        <AccountPanel />
                    </AdminPanel>
                </>
            ) : ( 
                <>
                    <AccountPanel />
                </>
            )}
        </div>
    )
}
````

That is, an oversimplification of the actual code but on the surface it should pretty much looks like that.