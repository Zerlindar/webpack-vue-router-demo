<template>
    <div><input class="form-control range" type="text" name="effec_type"/></div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            start: {
                type: String,
                required: true
            },
            end: {
                type: String,
                required: true
            },
            format: {
                type: String,
                required: true
            },
        },
        watch: {
            start: function (val, oldVal) {
                $(".range").val(this.start + "~" + this.end);
                this.$emit('init', this.start, this.end)
            },
            end: function (val, oldVal) {
                $(".range").val(this.start + "~" + this.end);
                this.$emit('init', this.start, this.end)
            },
        },
        mounted: function(){
            var self= this;
            $(".range").daterangepicker({
                //"timePicker": true,
                //"timePicker24Hour": true,
                timePickerIncrement: 30,
                opens: 'left',
                format: self.format, //控件中from和to 显示的日期格式
                locale: {
                    format: moment.localeData().longDateFormat('l'),
                    applyLabel: '确定',
                    cancelLabel: '取消',
                    separator: '~',
                    fromLabel: '起始时间',
                    toLabel: '结束时间',
                    customRangeLabel: '自定义',
                    daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                        '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    firstDay: 1
                },
            }).on('apply.daterangepicker', function(ev, picker) {
                //var start_time = picker.startDate.format('YYYY-MM-DD HH:mm:ss')；
                var start_time = picker.startDate.format(self.format),
                    end_time   = picker.endDate.format(self.format);
                self.$emit('confirm', start_time, end_time)
            });
            $(".range").val( $(".range").val().replace(/-/g, "."));
        }
    }
</script>
<style lang="scss"></style>

