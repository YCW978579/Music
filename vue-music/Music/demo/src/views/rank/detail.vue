<template>
  <transition name="slide">
      <music-list :title="title" :bgUrl="bgUrl" :songList="songList"></music-list>
    </transition>
</template>

<script>
import MusicList from '@/components/musicList'
import {getRankInfo} from '@/api'
export default {
    data(){
        return{
            list:[],
            title:"",
            bgUrl:"",
            songList:[],
        }
    },
    created(){
        this.getRankInfoList()
    },
    methods:{
        getRankInfoList(){
            let id = this.$route.params.id
            getRankInfo(id).then(res => {
                console.log(res)
                this.title = res.topinfo.ListName
                this.bgUrl = res.topinfo.pic_v12
                this.songList =this.editSongs(res.songlist);
            })
        },
        editSongs(list){
            let nSongsList=[];
            for(let i=0; i<list.length;i++){
                let item={
                    //歌曲的ID
                    id:list[i].data.songid,
                    //mid
                    mid:list[i].data.songmid,
                    //歌曲名
                    name:list[i].data.songname,
                    //专辑名
                    album:list[i].data.albumname,
                    //歌曲时长
                    interval:list[i].data.interval,
                    //专辑封面
                    img:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${list[i].data.albummid}.jpg?max_age=2592000`,
                    //歌曲链接
                    url:`http://dl.stream.qqmusic.qq.com/C400${list[i].data.songmid}/${list[i].data.songid}.m4a?guid=983915916&fromtag=66`,
                    //歌手
                    singer:list[i].data.singer
                }
                nSongsList.push(item)
            }
            return nSongsList
        } 
    },
    components:{
        MusicList
    }
}
</script>

<style lang="less" scoped>
.slide-enter-active,.slide-leave-active{
    transition:all 0.3s;
}
.slide-enter,.slide-leave-to{
    transform: translate3d(100%,0,0);
}
.slide{
    position: fixed;
    bottom:0;
    top:88px;
    width:100%;
}
</style>