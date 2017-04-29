<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            
                            {{ status.user.name }} said...
                        </p>

                        <p>lara
                            {{ status.created_at | ago }}
                        </p>
                    </div>

                    <div class="message-body" v-text="status.body">
                        msg body
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                statuses: []
            }
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },

        created() {
            axios.get('/statuses')
                .then(response => this.statuses = response.data);
        }
    }
</script>
