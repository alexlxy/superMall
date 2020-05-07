<template>
    <div class="login">
        
        <div class="login-all">
            
            <div class="login-con">
                <h2>美丽购</h2>
                <el-input class="login-m" v-model="input" placeholder="请输入内容"></el-input>
                <el-input class="login-m" placeholder="请输入密码" v-model="pwd" show-password></el-input>
                <el-button class="login-m" type="primary" @click="onLogin">登录</el-button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'login',
    components:{

    },
    data() {
        return {
            input:'',
            pwd:''
        }
    },
    methods:{
        onLogin(){
            if(this.input==='admin'&&this.pwd==='123456'){
                this.$router.push('/home');
                this.$message.success('登录成功');
            }
            else{
                this.$message.error('请输入正确的用户名和密码！')
            }
        }
    }
}
</script>
<style scoped>
.login {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url(https://gtms01.alicdn.com/tps/i1/TB1GTCYLXXXXXcHXpXXcoeQ2VXX-2500-600.jpg) no-repeat;
    background-size: cover;
}
.login-all {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45vw;
    height: 45vh;
    background-color: #ffffff;
    /* border: 1px solid red; */
    margin-left: 7vw;
    min-height: 350px;
}
.login-all .login-con h2 {
    height: 10vh;
    /* border: 1px solid red; */
    font-size: 40px;
    color: #f50;
    text-align: center;
    line-height: 10vh;
}

.login-all .login-con {
   width: 35vw;
   height: 40vh;
   /* border: 1px solid blue; */
}
.login-m {
    margin-top: 3vh;
    width: 35vw;
    background-size: 35vw;
}
</style>