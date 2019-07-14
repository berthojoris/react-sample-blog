import Dexie from "dexie";

const Insert = () => {
    var db = new Dexie("BlogDatabase");
    
    db.version(1).stores({
        blogs: "++id,title,body,author,slugtitle"
    });
}

export default Insert;