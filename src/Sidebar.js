import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import AddIcon from '@material-ui/icons/Add'
import db from './firebase'
import { useStateValue } from './StateProvider'
 
function Sidebar() {
    const [channels, setChannels]=useState([])
    const [{ user }] = useStateValue()

    useEffect(() => {
       db.collection('rooms').onSnapshot(snapshot=>(
           setChannels(snapshot.docs.map((doc)=>({
            id: doc.id,
            name:doc.data().name,
           }))
           )
       ))
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Gabriela Papp</h2>
                    <h3><FiberManualRecordIcon/>{user?.displayName}</h3>   
                </div>
                <CreateIcon/>
            </div>
                <SidebarOption Icon={InsertCommentIcon} 
                 title='Threads' id/>
                <SidebarOption Icon={InboxIcon} title='Mentions'/>
                <SidebarOption Icon={DraftsIcon} title='Saved'/>
                <SidebarOption Icon={BookmarkBorderIcon} 
                 title='Bookmarks'/>
                <hr/>
                <SidebarOption Icon={DraftsIcon} title='Saved' />
                <SidebarOption Icon={BookmarkBorderIcon} title='Bookmarks' />
                <hr/>
            <SidebarOption Icon={AddIcon} title='Add Channel' id addChannelOption/>
                {channels.map(channel=>(
                    <SidebarOption title={channel.name} id={channel.id}/>
                ))}
        </div>
    )
}

export default Sidebar
