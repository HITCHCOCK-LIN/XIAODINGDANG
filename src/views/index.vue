<template>
  <div class="app-container home">
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card class="Navigation-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据接入管理</span>
          </div>
          <div class="body">
            <router-link :to="goTarget('access')">
              <el-image :src="getImageSrc('access')" class="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </router-link>
            <p>
              <svg-icon icon-class="education" />
              描述：
              对系统接入的数据进行管理，主要针对各种类型的数据源接入平台的动作，可以通过低代码的方式进行数据接入的配置
            </p>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v0.1 - 2023-02-16">
              <ol>
                <li>创建页面</li>
                <li>启动开发数据接入功能</li>
                <li>实现从csv文件接入数据</li>
                <li>实现从mysql接入数据</li>
              </ol>
            </el-collapse-item>
          </el-collapse>



        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card class="Navigation-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据映射管理</span>
          </div>
          <div class="body">
            <router-link :to="goTarget('std')">
              <el-image :src="getImageSrc('std')" class="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </router-link>
            <p>
              <svg-icon icon-class="education" />
              描述：
              对系统映射数据的动作进行管理，主要针对各种类型的数据映射为设计好的表，可以用于数据标准化动作，可以通过低代码的方式进行数据映射的配置
            </p>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v0.1 - 2023-02-16">
              <ol>
                <li>创建页面</li>
                <li>启动开发数据接入功能</li>
                <li>实现从csv文件接入数据</li>
                <li>实现从mysql接入数据</li>
              </ol>
            </el-collapse-item>
          </el-collapse>



        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card class="Navigation-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据清洗管理</span>
          </div>
          <div class="body">
            <router-link :to="goTarget('clean')">
              <el-image :src="getImageSrc('clean')" class="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </router-link>
            <p>
              <svg-icon icon-class="education" />
              描述：
              对系统接入的数据进行管理，主要针对各种类型的数据源接入平台的动作，可以通过低代码的方式进行数据接入的配置
            </p>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v0.1 - 2023-02-16">
              <ol>
                <li>创建页面</li>
                <li>启动开发数据接入功能</li>
                <li>实现从csv文件接入数据</li>
                <li>实现从mysql接入数据</li>
              </ol>
            </el-collapse-item>
          </el-collapse>



        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card class="Navigation-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>数据汇总管理</span>
          </div>
          <div class="body">
            <router-link :to="goTarget('summary')">
              <el-image :src="getImageSrc('summary')" class="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </router-link>
            <p>
              <svg-icon icon-class="education" />
              描述：
              对系统接入的数据进行管理，主要针对各种类型的数据源接入平台的动作，可以通过低代码的方式进行数据接入的配置
            </p>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v0.1 - 2023-02-16">
              <ol>
                <li>创建页面</li>
                <li>启动开发数据接入功能</li>
                <li>实现从csv文件接入数据</li>
                <li>实现从mysql接入数据</li>
              </ol>
            </el-collapse-item>
          </el-collapse>



        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="8" :lg="6">
        <el-card class="Navigation-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>加工调度管理</span>
          </div>
          <div class="body">
            <router-link :to="goTarget('dispatch')">
              <el-image :src="getImageSrc('dispatch')" class="img">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
            </router-link>
            <p>
              <svg-icon icon-class="education" />
              描述：
              对系统接入的数据进行管理，主要针对各种类型的数据源接入平台的动作，可以通过低代码的方式进行数据接入的配置
            </p>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v0.1 - 2023-02-16">
              <ol>
                <li>创建页面</li>
                <li>启动开发数据接入功能</li>
                <li>实现从csv文件接入数据</li>
                <li>实现从mysql接入数据</li>
              </ol>
            </el-collapse-item>
          </el-collapse>



        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>技术选型</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis</li>
              <li>Druid</li>
              <li>Fastjson</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>Sass</li>
              <li>Quill</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
  </div>
</template>

<script>
import { assert } from 'console';

export default {
  name: "Index",
  data() {
    return {
      // 版本号
      version: "3.8.5",
      images: [
        { id: 'access', src: require('../assets/gifs/doraemon1.gif'), alt: 'governance/source' },
        { id: 'std', src: require('../assets/gifs/doraemon2.gif'), alt: 'governance/source' },
        { id: 'clean', src: require('../assets/gifs/doraemon3.gif'), alt: 'governance/source' },
        { id: 'summary', src: require('../assets/gifs/doraemon4.gif'), alt: 'governance/source' },
        { id: 'dispatch', src: require('../assets/gifs/doraemon5.gif'), alt: 'governance/source' }
      ],
    };
  },
  methods: {
    getImageSrc(id) {
      const image = this.images.find(image => image.id === id)
      return image ? image.src : ''
    },
    goTarget(id) {
      const image = this.images.find(image => image.id === id)
      return image ? image.alt : ''
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }
  .img{
    max-width: 390px;
    height: 240px;
  }
  .clearfix {
    text-align: center;
    font-size: 20px;
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }

  .Navigation-card {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }

}
</style>

