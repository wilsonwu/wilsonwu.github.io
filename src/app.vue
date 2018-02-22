<template>
	<v-app>
        <v-navigation-drawer temporary v-model="drawer" :mini-variant.sync="mini" light>
            <v-list>
                <v-list-item>
                    <v-list-tile avatar tag="div">
                        <v-list-tile-avatar>
                            <img src="https://avatars3.githubusercontent.com/u/1269496" />
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Wilson Wu</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon dark @click.native.stop="drawer = !drawer">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-item>
            </v-list>
            <v-list v-for="menu in menus" :key="menu.key">
                <v-list-group v-for="item in menu.menu" :value="item.active" :key="item.title">
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action v-if="item.items ? true : false">
                            <v-icon>keyboard_arrow_down</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-list-item v-for="subItem in item.items" :key="subItem.title">
                        <v-list-tile :href="subItem.url ? subItem.url : '#'">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed light>
            <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Wilson Wu OSS</v-toolbar-title>
        </v-toolbar>
		<main>
			<v-container fluid>
                <router-view></router-view>
				<vue-progress-bar></vue-progress-bar>
			</v-container>
		</main>
	</v-app>
</template>

<script>
	export default {
		created () {
			this.$Progress.start();
			this.$router.beforeEach((to, from, next) => {
				if (to.meta.progress !== undefined) {
					let meta = to.meta.progress;
					this.$Progress.parseMeta(meta);
				}
				this.$Progress.start();
				next();
			});
			this.$router.afterEach((to, from) => {
				this.$Progress.finish();
			});
		},
		mounted () {
			this.$Progress.finish();
		},
		data () {
			return {
				drawer: null,
                menus: [
                    {
                        key: 'main',
                        menu: [
                            {
                                action: 'local_activity',
                                title: 'vuetify-audio',
                                items: [
                                    { title: 'Demo', url: '#/vuetifyaudio' },
                                    { title: 'Github', url: 'https://github.com/wilsonwu/vuetify-audio' }
                                ]
                            },
                        ],
                    },
                    {
                        key: 'settings',
                        menu: [
                            {
                                action: 'settings',
                                title: 'About Wilson',
                                items: [
                                    { title: 'Wilson Profile', url: 'http://wilsonwu.me' },
                                ]
                            }
                        ],
                    }
                ],
                mini: false, //use this for menu mini in the icon click
				right: null,
			}
		},
	}
</script>
