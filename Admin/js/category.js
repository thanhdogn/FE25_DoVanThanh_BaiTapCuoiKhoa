// cách selector html
$("#show_hide_sidebar").on('click', function(){
	var left_sidebar = $('.sidbar_left').css('left');
	if(left_sidebar == '0px'){
		$('.sidbar_left').css('left', '-320px');
		$('.content').css('margin-left', '0px');
	}else{
		$('.sidbar_left').css('left', '0px');
		$('.content').css('margin-left', '320px');
	}
});

// setAttribute
$('selector').attr('class', 'value mới');
// getAtrribute
$('selector').attr('class');
// css get
$('selector').css('thuộc tinh css');
// css set
$('selector').css('thuộc tinh css', 'value mới');

$('.btn_account').on('click', function(){
	var isClassHideInfo = $('.info').hasClass('hide_info');
	if(isClassHideInfo){
		$('.info').removeClass('hide_info');
	}else{
		$('.info').addClass('hide_info');
	}
});

$('.btn-save').on('click', function(event){
	event.preventDefault();
	var product_name = $('#product_name').val();
	var category = $('select[name="category"]').val();
	var price = $('#input_price').val();
	var origin = $('.input_origin').val();
	var description = $('textarea').val();
	if(product_name == ''){
		$('#product_name').parent().append('<p style="color:red">Vui lòng nhập tên sản phẩm</p>');
	}

	if(category == ''){
		$('#product_name').parent().find('p').html('Vui lòng chọn loại sản phẩm');
	}
});

// thay đổi nội dung html chỉ text
$('selector').text();
// thay đổi nội dung html cả text và thẻ html
$('selector').html();

$('.btn_delete').on('click', function(){
	$(this).closest('tr').remove();
});

$(document).on('click', '.btn-edit',function(){
	$(this).closest('tr').find('.cate-description').attr('disabled', false);
	$(this).closest('tr').find('button[name="btn-confirm"]').attr('disabled', false);
	$(this).closest('tr').find('button[name="btn-delete"]').attr('disabled', false);
	$(this).attr('disabled', true);
});

$(document).on('click', '.btn-delete',function(){
	$(this).closest('tr').remove();
	var check = $('.btn-add-line').attr('disabled');
	if (check) {
		$('.btn-add-line').attr('disabled',false);
	}
});

$(document).on('click', '.btn-confirm',function(){
	$(this).closest('tr').find('input[name="cat-name"]').attr('disabled', true);
	$(this).closest('tr').find('.cate-description').attr('disabled', true);
	$(this).closest('tr').find('button[name="btn-confirm"]').attr('disabled', true);
	$(this).closest('tr').find('button[name="btn-edit"]').attr('disabled', false);
	$(this).closest('tr').find('button[name="btn-delete"]').attr('disabled', true);
	$('.btn-add-line').attr('disabled', false);
});



$('.btn-add-line').on('click', function(){
	var count = 0;
	$('.input-catname').each(function(){
		count++;
	});
	$(this).attr('disabled', true);
	$('tbody').append('<tr>'+
					'<td scope="row">'+(count+1)+'</td>'+
					'<td><input type="text" class="form-control input-catname" placeholder="Tên thể loại" name="cat-name"></td>'+
					'<td><textarea class="cate-description" cols="50" rows="2" placeholder="Mô tả thể loại"></textarea>'+
					'</td>'+
					'<td>'+
						'<button type="button" class="btn btn-danger btn-delete" name="btn-delete"><i class="far fa-trash-alt"></i></button>'+
						'<button type="button" disabled class="btn btn-success btn-edit" name="btn-edit"><i class="fas fa-pen"></i></button>'+
						'<button type="button" class="btn btn-success btn-confirm" name="btn-confirm"><i class="fas fa-check"></i></button>'+
					'</td>'+
				'</tr>');
});