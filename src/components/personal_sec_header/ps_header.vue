<template>
  <div class="marking-header">
    <ul class="h-img">
        <li @click="">
            <div class="mhimg">
                <i class="icon_fm"></i>
            </div>
            <div class="mha">
                <a>私人FM</a>
            </div>
        </li>
        <li @click="">
            <div class="mhimg">
                <i class="icon_calendar"></i>
            </div>
            <div class="mha">
                <a>每日推荐</a>
            </div>
        </li>
        <li @click="">
            <div class="mhimg">
                <i class="icon_music"></i>
            </div>
            <div class="mha">
                <a>歌单</a>
            </div>
        </li>
        <li @click="">
            <div class="mhimg">
                <i class="icon_top"></i>
            </div>
            <div class="mha">
                <a>排行榜</a>
            </div>
        </li>
    </ul>
  </div>
</template>

<style>
.icon_fm {
    background: url('./FM.svg') no-repeat center;
    background-size: contain;
}
.icon_calendar {
    background: url('./calendar.svg') no-repeat center;
    background-size: contain;
}
.icon_music {
    background: url('./musiclist.svg') no-repeat center;
    background-size: contain;
}
.icon_top {
    background: url('./toplist.svg') no-repeat center;
    background-size: contain;
}
.marking-header {
    margin-top: 10px;
    overflow: hidden;
}

.h-img {
    -webkit-padding-start: 0;
    text-align: center;
}

.h-img li {
    display: inline-block;
    list-style: none;
    margin: 0 18px;
    cursor: pointer;
}

.mhimg {
    height: 50px;
    width: 50px;
    border: 1px solid #B72712;
    border-radius: 50%;
}

.mhimg i {
    display: inline-block;
    position: relative;
    font-size: 10px;
    width: 25px;
    height: 25px;
    top: 10px;
    color: #B72712;
}

.h-img li:hover>.mhimg,
.h-img li:hover>.mhimg>i {
    background-color: #B72712;
    color: #fff
}

.mha {
    margin-top: 10px;
    text-align: center;
}

.mha a {
    font-size: 14px;
    color: black;
    text-decoration: none;
}

.h-img li a:hover {
    font-size: 14px;
    color: #B72712;
}
</style>
