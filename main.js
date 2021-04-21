$(function(){
    $(document).ready(function(){
        $('.se1_slide').slick({
         arrows:true,
         dots:true,
        });
      });

      $('.util li').mouseenter(function(){
          var ut =$(this).find('img').prop('src');
          var ut2 = ut.replace('ot','ov');
          $(this).find('img').prop('src',ut2)
      });

      $('.util li').mouseleave(function(){
          var ut1 = $(this).find('img').prop('src');
          var ut3 = ut1.replace('ov','ot')
          $(this).find('img').prop('src',ut3)
      })

      $('.se3_box1 li').mouseenter(function(){
          var bx1 = $(this).find('img').prop('src');
          var bx2 = bx1.replace('ot','ov');
          $(this).find('img').prop('src',bx2)
      })

      $('.se3_box1 li').mouseleave(function(){
          var bx3 = $(this).find('img').prop('src');
          var bx4 = bx3.replace('ov','ot');
          $(this).find('img').prop('src',bx4)
      });



    //   $('.se3_box1 li').hover(
    //     function(){
    //     var pre_src=$(this).find('img').attr('src');
    //     var next_src=pre_src.replace('ot','ov');
    //     $(this).find('img').attr('src',next_src);
    //   },
    //   function(){
    //     var pre_src=$(this).find('img').attr('src');
    //     var next_src=pre_src.replace('ov','ot');
    //     $(this).find('img').attr('src',next_src);
    //   });


      var sw = 0;
      $('.footer_btn').click(function(){
          if(sw==0){
              $('.site').slideDown(200);
              $('button').addClass('on');
              sw=1
          }else{
              $('.site').slideUp(200);
              $('button').removeClass('on')
              sw=0
          }
      })


      


      $(window).resize(function(){
          var aro = $(this).width();
        if(aro<=767){
            $('.se1_slide .slide1 img').attr('src','images/m_visual_a.jpg')
            $('.se1_slide .slide2 img').attr('src','images/m_visual_b.jpg')
            $('.section3 .se3_box1 .box1_2 img').attr('src','images/m_video.jpg')
            $('.section3 .se3_box1 .box1_3 img').attr('src','images/m_product.jpg')
            $('.se1_slide .slick-prev, .se1_slide .slick-next').hide();
        }else{
            $('.se1_slide .slide1 img').attr('src','images/visual_a.jpg')
            $('.se1_slide .slide2 img').attr('src','images/visual_b.jpg')
            $('.section3 .se3_box1 .box1_2 img').attr('src','images/video_ot.jpg')
            $('.section3 .se3_box1 .box1_3 img').attr('src','images/product_ot.jpg')
            $('.se1_slide .slick-prev, .se1_slide .slick-next').show()
        }
      })

      
      var sld = $(window).width();
      if(sld <=767){
        $('.se1_slide .slide1 img').attr('src','images/m_visual_a.jpg')
        $('.se1_slide .slide2 img').attr('src','images/m_visual_b.jpg')
        $('.section3 .se3_box1 .box1_2 img').attr('src','images/m_video.jpg')
        $('.section3 .se3_box1 .box1_3 img').attr('src','images/m_product.jpg')
      }
      if(sld<=767){
          $('.se1_slide .slick-prev, .se1_slide .slick-next').hide();
      }else{
        $('.se1_slide .slick-prev, .se1_slide .slick-next').show();
      }

      $('body,html').css('overflow-x','hidden')

      $('.m_btn').click(function(){
          $('.cover').fadeIn();
          $('.m_side_menu').animate({'left':0})
          $('body,html').css('overflow','hidden')

      })

      $('.cover').click(function(){
          $('.m_side_menu').animate({'left':'-100%'},500)
          $('.cover').fadeOut()
          $('body,html').css('overflow','auto')

      })

});