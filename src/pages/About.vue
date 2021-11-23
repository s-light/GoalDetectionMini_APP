<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section>
            <h4>{{ appinfo.productName }}</h4>
            <p>
                version: v{{ appinfo.version }}
            </p>
            <p>
                {{ appinfo.description }}<br>
                find the project repository at <br>
                <a
                    target="_blank"
                    :href="appinfo.projectUrl"
                >
                    {{ appinfo.projectUrl }}
                </a>
            </p>
            <p>
                a live preview version is hosted at<br>
                <a
                    target="_blank"
                    :href="appinfo.previewUrl"
                >
                    {{ appinfo.previewUrl }}
                </a>
            </p>
        </section>
        <section>
            <h4>How it Works</h4>
            the GoalDetectionMini App listens for Keyboard events.<br>
            the GoalDetectionMini module connects as bluetooth keyboard.<br>
            for what key combinations are exactly used have a look at the code ;-)
        </section>
    </q-page>
</template>

<style lang="stylus">
</style>

<script>
// import packageInfo from '../../package.json'
// we do not import the package.json as this could be a security concern.
import appinfo from '../../appinfo.json'

export default {
    name: 'About',
    data () {
        return {
            appinfo: appinfo
        }
    }
}
</script>
