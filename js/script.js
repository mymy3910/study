$(function() {
    $('input:checkbox').change(function() {
        var cnt = $('label.answer_a input:checkbox:checked').length;
        $('div.result_a').text('Aは' + cnt + '個です！');
    }).trigger('change');
})
$(function() {
    $('input:checkbox').change(function() {
        var cnt = $('label.answer_b input:checkbox:checked').length;
        $('div.result_b').text('Bは' + cnt + '個です！');
    }).trigger('change');
})