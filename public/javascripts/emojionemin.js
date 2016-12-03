/* jshint maxerr: 10000 */
/* jslint unused: true */
/* jshint shadow: true */
/* jshint -W075 */
(function(ns){
    // this list must be ordered from largest length of the value array, index 0, to the shortest
    ns.emojioneList = {':kiss_ww:':["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","1f469-2764-1f48b-1f469"],':couplekiss_ww:':["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","1f469-2764-1f48b-1f469"],':kiss_mm:':["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","1f468-2764-1f48b-1f468"],':couplekiss_mm:':["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","1f468-2764-1f48b-1f468"],':family_mmbb:':["1f468-200d-1f468-200d-1f466-200d-1f466","1f468-1f468-1f466-1f466"],':family_mmgb:':["1f468-200d-1f468-200d-1f467-200d-1f466","1f468-1f468-1f467-1f466"],':family_mmgg:':["1f468-200d-1f468-200d-1f467-200d-1f467","1f468-1f468-1f467-1f467"],':family_mwbb:':["1f468-200d-1f469-200d-1f466-200d-1f466","1f468-1f469-1f466-1f466"],':family_mwgb:':["1f468-200d-1f469-200d-1f467-200d-1f466","1f468-1f469-1f467-1f466"],':family_mwgg:':["1f468-200d-1f469-200d-1f467-200d-1f467","1f468-1f469-1f467-1f467"],':family_wwbb:':["1f469-200d-1f469-200d-1f466-200d-1f466","1f469-1f469-1f466-1f466"],':family_wwgb:':["1f469-200d-1f469-200d-1f467-200d-1f466","1f469-1f469-1f467-1f466"],':family_wwgg:':["1f469-200d-1f469-200d-1f467-200d-1f467","1f469-1f469-1f467-1f467"],':couple_ww:':["1f469-200d-2764-fe0f-200d-1f469","1f469-2764-1f469"],':couple_with_heart_ww:':["1f469-200d-2764-fe0f-200d-1f469","1f469-2764-1f469"],':couple_mm:':["1f468-200d-2764-fe0f-200d-1f468","1f468-2764-1f468"],':couple_with_heart_mm:':["1f468-200d-2764-fe0f-200d-1f468","1f468-2764-1f468"],':family_mmb:':["1f468-200d-1f468-200d-1f466","1f468-1f468-1f466"],':family_mmg:':["1f468-200d-1f468-200d-1f467","1f468-1f468-1f467"],':family_mwg:':["1f468-200d-1f469-200d-1f467","1f468-1f469-1f467"],':family_wwb:':["1f469-200d-1f469-200d-1f466","1f469-1f469-1f466"],':family_wwg:':["1f469-200d-1f469-200d-1f467","1f469-1f469-1f467"],':eye_in_speech_bubble:':["1f441-200d-1f5e8","1f441-1f5e8"],':hash:':["0023-fe0f-20e3","0023-20e3"],':zero:':["0030-fe0f-20e3","0030-20e3"],':one:':["0031-fe0f-20e3","0031-20e3"],':two:':["0032-fe0f-20e3","0032-20e3"],':three:':["0033-fe0f-20e3","0033-20e3"],':four:':["0034-fe0f-20e3","0034-20e3"],':five:':["0035-fe0f-20e3","0035-20e3"],':six:':["0036-fe0f-20e3","0036-20e3"],':seven:':["0037-fe0f-20e3","0037-20e3"],':eight:':["0038-fe0f-20e3","0038-20e3"],':nine:':["0039-fe0f-20e3","0039-20e3"],':asterisk:':["002a-fe0f-20e3","002a-20e3"],':keycap_asterisk:':["002a-fe0f-20e3","002a-20e3"],':metal_tone5:':["1f918-1f3ff"],':sign_of_the_horns_tone5:':["1f918-1f3ff"],':metal_tone4:':["1f918-1f3fe"],':sign_of_the_horns_tone4:':["1f918-1f3fe"],':metal_tone3:':["1f918-1f3fd"],':sign_of_the_horns_tone3:':["1f918-1f3fd"],':metal_tone2:':["1f918-1f3fc"],':sign_of_the_horns_tone2:':["1f918-1f3fc"],':metal_tone1:':["1f918-1f3fb"],':sign_of_the_horns_tone1:':["1f918-1f3fb"],':bath_tone5:':["1f6c0-1f3ff"],':bath_tone4:':["1f6c0-1f3fe"],':bath_tone3:':["1f6c0-1f3fd"],':bath_tone2:':["1f6c0-1f3fc"],':bath_tone1:':["1f6c0-1f3fb"],':walking_tone5:':["1f6b6-1f3ff"],':walking_tone4:':["1f6b6-1f3fe"],':walking_tone3:':["1f6b6-1f3fd"],':walking_tone2:':["1f6b6-1f3fc"],':walking_tone1:':["1f6b6-1f3fb"],':mountain_bicyclist_tone5:':["1f6b5-1f3ff"],':mountain_bicyclist_tone4:':["1f6b5-1f3fe"],':mountain_bicyclist_tone3:':["1f6b5-1f3fd"],':mountain_bicyclist_tone2:':["1f6b5-1f3fc"],':mountain_bicyclist_tone1:':["1f6b5-1f3fb"],':bicyclist_tone5:':["1f6b4-1f3ff"],':bicyclist_tone4:':["1f6b4-1f3fe"],':bicyclist_tone3:':["1f6b4-1f3fd"],':bicyclist_tone2:':["1f6b4-1f3fc"],':bicyclist_tone1:':["1f6b4-1f3fb"],':rowboat_tone5:':["1f6a3-1f3ff"],':rowboat_tone4:':["1f6a3-1f3fe"],':rowboat_tone3:':["1f6a3-1f3fd"],':rowboat_tone2:':["1f6a3-1f3fc"],':rowboat_tone1:':["1f6a3-1f3fb"],':pray_tone5:':["1f64f-1f3ff"],':pray_tone4:':["1f64f-1f3fe"],':pray_tone3:':["1f64f-1f3fd"],':pray_tone2:':["1f64f-1f3fc"],':pray_tone1:':["1f64f-1f3fb"],':person_with_pouting_face_tone5:':["1f64e-1f3ff"],':person_with_pouting_face_tone4:':["1f64e-1f3fe"],':person_with_pouting_face_tone3:':["1f64e-1f3fd"],':person_with_pouting_face_tone2:':["1f64e-1f3fc"],':person_with_pouting_face_tone1:':["1f64e-1f3fb"],':person_frowning_tone5:':["1f64d-1f3ff"],':person_frowning_tone4:':["1f64d-1f3fe"],':person_frowning_tone3:':["1f64d-1f3fd"],':person_frowning_tone2:':["1f64d-1f3fc"],':person_frowning_tone1:':["1f64d-1f3fb"],':raised_hands_tone5:':["1f64c-1f3ff"],':raised_hands_tone4:':["1f64c-1f3fe"],':raised_hands_tone3:':["1f64c-1f3fd"],':raised_hands_tone2:':["1f64c-1f3fc"],':raised_hands_tone1:':["1f64c-1f3fb"],':raising_hand_tone5:':["1f64b-1f3ff"],':raising_hand_tone4:':["1f64b-1f3fe"],':raising_hand_tone3:':["1f64b-1f3fd"],':raising_hand_tone2:':["1f64b-1f3fc"],':raising_hand_tone1:':["1f64b-1f3fb"],':bow_tone5:':["1f647-1f3ff"],':bow_tone4:':["1f647-1f3fe"],':bow_tone3:':["1f647-1f3fd"],':bow_tone2:':["1f647-1f3fc"],':bow_tone1:':["1f647-1f3fb"],':ok_woman_tone5:':["1f646-1f3ff"],':ok_woman_tone4:':["1f646-1f3fe"],':ok_woman_tone3:':["1f646-1f3fd"],':ok_woman_tone2:':["1f646-1f3fc"],':ok_woman_tone1:':["1f646-1f3fb"],':no_good_tone5:':["1f645-1f3ff"],':no_good_tone4:':["1f645-1f3fe"],':no_good_tone3:':["1f645-1f3fd"],':no_good_tone2:':["1f645-1f3fc"],':no_good_tone1:':["1f645-1f3fb"],':vulcan_tone5:':["1f596-1f3ff"],':raised_hand_with_part_between_middle_and_ring_fingers_tone5:':["1f596-1f3ff"],':vulcan_tone4:':["1f596-1f3fe"],':raised_hand_with_part_between_middle_and_ring_fingers_tone4:':["1f596-1f3fe"],':vulcan_tone3:':["1f596-1f3fd"],':raised_hand_with_part_between_middle_and_ring_fingers_tone3:':["1f596-1f3fd"],':vulcan_tone2:':["1f596-1f3fc"],':raised_hand_with_part_between_middle_and_ring_fingers_tone2:':["1f596-1f3fc"],':vulcan_tone1:':["1f596-1f3fb"],':raised_hand_with_part_between_middle_and_ring_fingers_tone1:':["1f596-1f3fb"],':middle_finger_tone5:':["1f595-1f3ff"],':reversed_hand_with_middle_finger_extended_tone5:':["1f595-1f3ff"],':middle_finger_tone4:':["1f595-1f3fe"],':reversed_hand_with_middle_finger_extended_tone4:':["1f595-1f3fe"],':middle_finger_tone3:':["1f595-1f3fd"],':reversed_hand_with_middle_finger_extended_tone3:':["1f595-1f3fd"],':middle_finger_tone2:':["1f595-1f3fc"],':reversed_hand_with_middle_finger_extended_tone2:':["1f595-1f3fc"],':middle_finger_tone1:':["1f595-1f3fb"],':reversed_hand_with_middle_finger_extended_tone1:':["1f595-1f3fb"],':hand_splayed_tone5:':["1f590-1f3ff"],':raised_hand_with_fingers_splayed_tone5:':["1f590-1f3ff"],':hand_splayed_tone4:':["1f590-1f3fe"],':raised_hand_with_fingers_splayed_tone4:':["1f590-1f3fe"],':hand_splayed_tone3:':["1f590-1f3fd"],':raised_hand_with_fingers_splayed_tone3:':["1f590-1f3fd"],':hand_splayed_tone2:':["1f590-1f3fc"],':raised_hand_with_fingers_splayed_tone2:':["1f590-1f3fc"],':hand_splayed_tone1:':["1f590-1f3fb"],':raised_hand_with_fingers_splayed_tone1:':["1f590-1f3fb"],':spy_tone5:':["1f575-1f3ff"],':sleuth_or_spy_tone5:':["1f575-1f3ff"],':spy_tone4:':["1f575-1f3fe"],':sleuth_or_spy_tone4:':["1f575-1f3fe"],':spy_tone3:':["1f575-1f3fd"],':sleuth_or_spy_tone3:':["1f575-1f3fd"],':spy_tone2:':["1f575-1f3fc"],':sleuth_or_spy_tone2:':["1f575-1f3fc"],':spy_tone1:':["1f575-1f3fb"],':sleuth_or_spy_tone1:':["1f575-1f3fb"],':muscle_tone5:':["1f4aa-1f3ff"],':muscle_tone4:':["1f4aa-1f3fe"],':muscle_tone3:':["1f4aa-1f3fd"],':muscle_tone2:':["1f4aa-1f3fc"],':muscle_tone1:':["1f4aa-1f3fb"],':haircut_tone5:':["1f487-1f3ff"],':haircut_tone4:':["1f487-1f3fe"],':haircut_tone3:':["1f487-1f3fd"],':haircut_tone2:':["1f487-1f3fc"],':haircut_tone1:':["1f487-1f3fb"],':massage_tone5:':["1f486-1f3ff"],':massage_tone4:':["1f486-1f3fe"],':massage_tone3:':["1f486-1f3fd"],':massage_tone2:':["1f486-1f3fc"],':massage_tone1:':["1f486-1f3fb"],':nail_care_tone5:':["1f485-1f3ff"],':nail_care_tone4:':["1f485-1f3fe"],':nail_care_tone3:':["1f485-1f3fd"],':nail_care_tone2:':["1f485-1f3fc"],':nail_care_tone1:':["1f485-1f3fb"],':dancer_tone5:':["1f483-1f3ff"],':dancer_tone4:':["1f483-1f3fe"],':dancer_tone3:':["1f483-1f3fd"],':dancer_tone2:':["1f483-1f3fc"],':dancer_tone1:':["1f483-1f3fb"],':guardsman_tone5:':["1f482-1f3ff"],':guardsman_tone4:':["1f482-1f3fe"],':guardsman_tone3:':["1f482-1f3fd"],':guardsman_tone2:':["1f482-1f3fc"],':guardsman_tone1:':["1f482-1f3fb"],':information_desk_person_tone5:':["1f481-1f3ff"],':information_desk_person_tone4:':["1f481-1f3fe"],':information_desk_person_tone3:':["1f481-1f3fd"],':information_desk_person_tone2:':["1f481-1f3fc"],':information_desk_person_tone1:':["1f481-1f3fb"],':angel_tone5:':["1f47c-1f3ff"],':angel_tone4:':["1f47c-1f3fe"],':angel_tone3:':["1f47c-1f3fd"],':angel_tone2:':["1f47c-1f3fc"],':angel_tone1:':["1f47c-1f3fb"],':princess_tone5:':["1f478-1f3ff"],':princess_tone4:':["1f478-1f3fe"],':princess_tone3:':["1f478-1f3fd"],':princess_tone2:':["1f478-1f3fc"],':princess_tone1:':["1f478-1f3fb"],':construction_worker_tone5:':["1f477-1f3ff"],':construction_worker_tone4:':["1f477-1f3fe"],':construction_worker_tone3:':["1f477-1f3fd"],':construction_worker_tone2:':["1f477-1f3fc"],':construction_worker_tone1:':["1f477-1f3fb"],':baby_tone5:':["1f476-1f3ff"],':baby_tone4:':["1f476-1f3fe"],':baby_tone3:':["1f476-1f3fd"],':baby_tone2:':["1f476-1f3fc"],':baby_tone1:':["1f476-1f3fb"],':older_woman_tone5:':["1f475-1f3ff"],':grandma_tone5:':["1f475-1f3ff"],':older_woman_tone4:':["1f475-1f3fe"],':grandma_tone4:':["1f475-1f3fe"],':older_woman_tone3:':["1f475-1f3fd"],':grandma_tone3:':["1f475-1f3fd"],':older_woman_tone2:':["1f475-1f3fc"],':grandma_tone2:':["1f475-1f3fc"],':older_woman_tone1:':["1f475-1f3fb"],':grandma_tone1:':["1f475-1f3fb"],':older_man_tone5:':["1f474-1f3ff"],':older_man_tone4:':["1f474-1f3fe"],':older_man_tone3:':["1f474-1f3fd"],':older_man_tone2:':["1f474-1f3fc"],':older_man_tone1:':["1f474-1f3fb"],':man_with_turban_tone5:':["1f473-1f3ff"],':man_with_turban_tone4:':["1f473-1f3fe"],':man_with_turban_tone3:':["1f473-1f3fd"],':man_with_turban_tone2:':["1f473-1f3fc"],':man_with_turban_tone1:':["1f473-1f3fb"],':man_with_gua_pi_mao_tone5:':["1f472-1f3ff"],':man_with_gua_pi_mao_tone4:':["1f472-1f3fe"],':man_with_gua_pi_mao_tone3:':["1f472-1f3fd"],':man_with_gua_pi_mao_tone2:':["1f472-1f3fc"],':man_with_gua_pi_mao_tone1:':["1f472-1f3fb"],':person_with_blond_hair_tone5:':["1f471-1f3ff"],':person_with_blond_hair_tone4:':["1f471-1f3fe"],':person_with_blond_hair_tone3:':["1f471-1f3fd"],':person_with_blond_hair_tone2:':["1f471-1f3fc"],':person_with_blond_hair_tone1:':["1f471-1f3fb"],':bride_with_veil_tone5:':["1f470-1f3ff"],':bride_with_veil_tone4:':["1f470-1f3fe"],':bride_with_veil_tone3:':["1f470-1f3fd"],':bride_with_veil_tone2:':["1f470-1f3fc"],':bride_with_veil_tone1:':["1f470-1f3fb"],':cop_tone5:':["1f46e-1f3ff"],':cop_tone4:':["1f46e-1f3fe"],':cop_tone3:':["1f46e-1f3fd"],':cop_tone2:':["1f46e-1f3fc"],':cop_tone1:':["1f46e-1f3fb"],':woman_tone5:':["1f469-1f3ff"],':woman_tone4:':["1f469-1f3fe"],':woman_tone3:':["1f469-1f3fd"],':woman_tone2:':["1f469-1f3fc"],':woman_tone1:':["1f469-1f3fb"],':man_tone5:':["1f468-1f3ff"],':man_tone4:':["1f468-1f3fe"],':man_tone3:':["1f468-1f3fd"],':man_tone2:':["1f468-1f3fc"],':man_tone1:':["1f468-1f3fb"],':girl_tone5:':["1f467-1f3ff"],':girl_tone4:':["1f467-1f3fe"],':girl_tone3:':["1f467-1f3fd"],':girl_tone2:':["1f467-1f3fc"],':girl_tone1:':["1f467-1f3fb"],':boy_tone5:':["1f466-1f3ff"],':boy_tone4:':["1f466-1f3fe"],':boy_tone3:':["1f466-1f3fd"],':boy_tone2:':["1f466-1f3fc"],':boy_tone1:':["1f466-1f3fb"],':open_hands_tone5:':["1f450-1f3ff"],':open_hands_tone4:':["1f450-1f3fe"],':open_hands_tone3:':["1f450-1f3fd"],':open_hands_tone2:':["1f450-1f3fc"],':open_hands_tone1:':["1f450-1f3fb"],':clap_tone5:':["1f44f-1f3ff"],':clap_tone4:':["1f44f-1f3fe"],':clap_tone3:':["1f44f-1f3fd"],':clap_tone2:':["1f44f-1f3fc"],':clap_tone1:':["1f44f-1f3fb"],':thumbsdown_tone5:':["1f44e-1f3ff"],':-1_tone5:':["1f44e-1f3ff"],':thumbsdown_tone4:':["1f44e-1f3fe"],':-1_tone4:':["1f44e-1f3fe"],':thumbsdown_tone3:':["1f44e-1f3fd"],':-1_tone3:':["1f44e-1f3fd"],':thumbsdown_tone2:':["1f44e-1f3fc"],':-1_tone2:':["1f44e-1f3fc"],':thumbsdown_tone1:':["1f44e-1f3fb"],':-1_tone1:':["1f44e-1f3fb"],':thumbsup_tone5:':["1f44d-1f3ff"],':+1_tone5:':["1f44d-1f3ff"],':thumbsup_tone4:':["1f44d-1f3fe"],':+1_tone4:':["1f44d-1f3fe"],':thumbsup_tone3:':["1f44d-1f3fd"],':+1_tone3:':["1f44d-1f3fd"],':thumbsup_tone2:':["1f44d-1f3fc"],':+1_tone2:':["1f44d-1f3fc"],':thumbsup_tone1:':["1f44d-1f3fb"],':+1_tone1:':["1f44d-1f3fb"],':ok_hand_tone5:':["1f44c-1f3ff"],':ok_hand_tone4:':["1f44c-1f3fe"],':ok_hand_tone3:':["1f44c-1f3fd"],':ok_hand_tone2:':["1f44c-1f3fc"],':ok_hand_tone1:':["1f44c-1f3fb"],':wave_tone5:':["1f44b-1f3ff"],':wave_tone4:':["1f44b-1f3fe"],':wave_tone3:':["1f44b-1f3fd"],':wave_tone2:':["1f44b-1f3fc"],':wave_tone1:':["1f44b-1f3fb"],':punch_tone5:':["1f44a-1f3ff"],':punch_tone4:':["1f44a-1f3fe"],':punch_tone3:':["1f44a-1f3fd"],':punch_tone2:':["1f44a-1f3fc"],':punch_tone1:':["1f44a-1f3fb"],':point_right_tone5:':["1f449-1f3ff"],':point_right_tone4:':["1f449-1f3fe"],':point_right_tone3:':["1f449-1f3fd"],':point_right_tone2:':["1f449-1f3fc"],':point_right_tone1:':["1f449-1f3fb"],':point_left_tone5:':["1f448-1f3ff"],':point_left_tone4:':["1f448-1f3fe"],':point_left_tone3:':["1f448-1f3fd"],':point_left_tone2:':["1f448-1f3fc"],':point_left_tone1:':["1f448-1f3fb"],':point_down_tone5:':["1f447-1f3ff"],':point_down_tone4:':["1f447-1f3fe"],':point_down_tone3:':["1f447-1f3fd"],':point_down_tone2:':["1f447-1f3fc"],':point_down_tone1:':["1f447-1f3fb"],':point_up_2_tone5:':["1f446-1f3ff"],':point_up_2_tone4:':["1f446-1f3fe"],':point_up_2_tone3:':["1f446-1f3fd"],':point_up_2_tone2:':["1f446-1f3fc"],':point_up_2_tone1:':["1f446-1f3fb"],':nose_tone5:':["1f443-1f3ff"],':nose_tone4:':["1f443-1f3fe"],':nose_tone3:':["1f443-1f3fd"],':nose_tone2:':["1f443-1f3fc"],':nose_tone1:':["1f443-1f3fb"],':ear_tone5:':["1f442-1f3ff"],':ear_tone4:':["1f442-1f3fe"],':ear_tone3:':["1f442-1f3fd"],':ear_tone2:':["1f442-1f3fc"],':ear_tone1:':["1f442-1f3fb"],':lifter_tone5:':["1f3cb-1f3ff"],':weight_lifter_tone5:':["1f3cb-1f3ff"],':lifter_tone4:':["1f3cb-1f3fe"],':weight_lifter_tone4:':["1f3cb-1f3fe"],':lifter_tone3:':["1f3cb-1f3fd"],':weight_lifter_tone3:':["1f3cb-1f3fd"],':lifter_tone2:':["1f3cb-1f3fc"],':weight_lifter_tone2:':["1f3cb-1f3fc"],':lifter_tone1:':["1f3cb-1f3fb"],':weight_lifter_tone1:':["1f3cb-1f3fb"],':swimmer_tone5:':["1f3ca-1f3ff"],':swimmer_tone4:':["1f3ca-1f3fe"],':swimmer_tone3:':["1f3ca-1f3fd"],':swimmer_tone2:':["1f3ca-1f3fc"],':swimmer_tone1:':["1f3ca-1f3fb"],':horse_racing_tone5:':["1f3c7-1f3ff"],':horse_racing_tone4:':["1f3c7-1f3fe"],':horse_racing_tone3:':["1f3c7-1f3fd"],':horse_racing_tone2:':["1f3c7-1f3fc"],':horse_racing_tone1:':["1f3c7-1f3fb"],':surfer_tone5:':["1f3c4-1f3ff"],':surfer_tone4:':["1f3c4-1f3fe"],':surfer_tone3:':["1f3c4-1f3fd"],':surfer_tone2:':["1f3c4-1f3fc"],':surfer_tone1:':["1f3c4-1f3fb"],':runner_tone5:':["1f3c3-1f3ff"],':runner_tone4:':["1f3c3-1f3fe"],':runner_tone3:':["1f3c3-1f3fd"],':runner_tone2:':["1f3c3-1f3fc"],':runner_tone1:':["1f3c3-1f3fb"],':santa_tone5:':["1f385-1f3ff"],':santa_tone4:':["1f385-1f3fe"],':santa_tone3:':["1f385-1f3fd"],':santa_tone2:':["1f385-1f3fc"],':santa_tone1:':["1f385-1f3fb"],':flag_zw:':["1f1ff-1f1fc"],':zw:':["1f1ff-1f1fc"],':flag_zm:':["1f1ff-1f1f2"],':zm:':["1f1ff-1f1f2"],':flag_za:':["1f1ff-1f1e6"],':za:':["1f1ff-1f1e6"],':flag_yt:':["1f1fe-1f1f9"],':yt:':["1f1fe-1f1f9"],':flag_ye:':["1f1fe-1f1ea"],':ye:':["1f1fe-1f1ea"],':flag_xk:':["1f1fd-1f1f0"],':xk:':["1f1fd-1f1f0"],':flag_ws:':["1f1fc-1f1f8"],':ws:':["1f1fc-1f1f8"],':flag_wf:':["1f1fc-1f1eb"],':wf:':["1f1fc-1f1eb"],':flag_vu:':["1f1fb-1f1fa"],':vu:':["1f1fb-1f1fa"],':flag_vn:':["1f1fb-1f1f3"],':vn:':["1f1fb-1f1f3"],':flag_vi:':["1f1fb-1f1ee"],':vi:':["1f1fb-1f1ee"],':flag_vg:':["1f1fb-1f1ec"],':vg:':["1f1fb-1f1ec"],':flag_ve:':["1f1fb-1f1ea"],':ve:':["1f1fb-1f1ea"],':flag_vc:':["1f1fb-1f1e8"],':vc:':["1f1fb-1f1e8"],':flag_va:':["1f1fb-1f1e6"],':va:':["1f1fb-1f1e6"],':flag_uz:':["1f1fa-1f1ff"],':uz:':["1f1fa-1f1ff"],':flag_uy:':["1f1fa-1f1fe"],':uy:':["1f1fa-1f1fe"],':flag_us:':["1f1fa-1f1f8"],':us:':["1f1fa-1f1f8"],':flag_um:':["1f1fa-1f1f2"],':um:':["1f1fa-1f1f2"],':flag_ug:':["1f1fa-1f1ec"],':ug:':["1f1fa-1f1ec"],':flag_ua:':["1f1fa-1f1e6"],':ua:':["1f1fa-1f1e6"],':flag_tz:':["1f1f9-1f1ff"],':tz:':["1f1f9-1f1ff"],':flag_tw:':["1f1f9-1f1fc"],':tw:':["1f1f9-1f1fc"],':flag_tv:':["1f1f9-1f1fb"],':tuvalu:':["1f1f9-1f1fb"],':flag_tt:':["1f1f9-1f1f9"],':tt:':["1f1f9-1f1f9"],':flag_tr:':["1f1f9-1f1f7"],':tr:':["1f1f9-1f1f7"],':flag_to:':["1f1f9-1f1f4"],':to:':["1f1f9-1f1f4"],':flag_tn:':["1f1f9-1f1f3"],':tn:':["1f1f9-1f1f3"],':flag_tm:':["1f1f9-1f1f2"],':turkmenistan:':["1f1f9-1f1f2"],':flag_tl:':["1f1f9-1f1f1"],':tl:':["1f1f9-1f1f1"],':flag_tk:':["1f1f9-1f1f0"],':tk:':["1f1f9-1f1f0"],':flag_tj:':["1f1f9-1f1ef"],':tj:':["1f1f9-1f1ef"],':flag_th:':["1f1f9-1f1ed"],':th:':["1f1f9-1f1ed"],':flag_tg:':["1f1f9-1f1ec"],':tg:':["1f1f9-1f1ec"],':flag_tf:':["1f1f9-1f1eb"],':tf:':["1f1f9-1f1eb"],':flag_td:':["1f1f9-1f1e9"],':td:':["1f1f9-1f1e9"],':flag_tc:':["1f1f9-1f1e8"],':tc:':["1f1f9-1f1e8"],':flag_ta:':["1f1f9-1f1e6"],':ta:':["1f1f9-1f1e6"],':flag_sz:':["1f1f8-1f1ff"],':sz:':["1f1f8-1f1ff"],':flag_sy:':["1f1f8-1f1fe"],':sy:':["1f1f8-1f1fe"],':flag_sx:':["1f1f8-1f1fd"],':sx:':["1f1f8-1f1fd"],':flag_sv:':["1f1f8-1f1fb"],':sv:':["1f1f8-1f1fb"],':flag_st:':["1f1f8-1f1f9"],':st:':["1f1f8-1f1f9"],':flag_ss:':["1f1f8-1f1f8"],':ss:':["1f1f8-1f1f8"],':flag_sr:':["1f1f8-1f1f7"],':sr:':["1f1f8-1f1f7"],':flag_so:':["1f1f8-1f1f4"],':so:':["1f1f8-1f1f4"],':flag_sn:':["1f1f8-1f1f3"],':sn:':["1f1f8-1f1f3"],':flag_sm:':["1f1f8-1f1f2"],':sm:':["1f1f8-1f1f2"],':flag_sl:':["1f1f8-1f1f1"],':sl:':["1f1f8-1f1f1"],':flag_sk:':["1f1f8-1f1f0"],':sk:':["1f1f8-1f1f0"],':flag_sj:':["1f1f8-1f1ef"],':sj:':["1f1f8-1f1ef"],':flag_si:':["1f1f8-1f1ee"],':si:':["1f1f8-1f1ee"],':flag_sh:':["1f1f8-1f1ed"],':sh:':["1f1f8-1f1ed"],':flag_sg:':["1f1f8-1f1ec"],':sg:':["1f1f8-1f1ec"],':flag_se:':["1f1f8-1f1ea"],':se:':["1f1f8-1f1ea"],':flag_sd:':["1f1f8-1f1e9"],':sd:':["1f1f8-1f1e9"],':flag_sc:':["1f1f8-1f1e8"],':sc:':["1f1f8-1f1e8"],':flag_sb:':["1f1f8-1f1e7"],':sb:':["1f1f8-1f1e7"],':flag_sa:':["1f1f8-1f1e6"],':saudiarabia:':["1f1f8-1f1e6"],':saudi:':["1f1f8-1f1e6"],':flag_rw:':["1f1f7-1f1fc"],':rw:':["1f1f7-1f1fc"],':flag_ru:':["1f1f7-1f1fa"],':ru:':["1f1f7-1f1fa"],':flag_rs:':["1f1f7-1f1f8"],':rs:':["1f1f7-1f1f8"],':flag_ro:':["1f1f7-1f1f4"],':ro:':["1f1f7-1f1f4"],':flag_re:':["1f1f7-1f1ea"],':re:':["1f1f7-1f1ea"],':flag_qa:':["1f1f6-1f1e6"],':qa:':["1f1f6-1f1e6"],':flag_py:':["1f1f5-1f1fe"],':py:':["1f1f5-1f1fe"],':flag_pw:':["1f1f5-1f1fc"],':pw:':["1f1f5-1f1fc"],':flag_pt:':["1f1f5-1f1f9"],':pt:':["1f1f5-1f1f9"],':flag_ps:':["1f1f5-1f1f8"],':ps:':["1f1f5-1f1f8"],':flag_pr:':["1f1f5-1f1f7"],':pr:':["1f1f5-1f1f7"],':flag_pn:':["1f1f5-1f1f3"],':pn:':["1f1f5-1f1f3"],':flag_pm:':["1f1f5-1f1f2"],':pm:':["1f1f5-1f1f2"],':flag_pl:':["1f1f5-1f1f1"],':pl:':["1f1f5-1f1f1"],':flag_pk:':["1f1f5-1f1f0"],':pk:':["1f1f5-1f1f0"],':flag_ph:':["1f1f5-1f1ed"],':ph:':["1f1f5-1f1ed"],':flag_pg:':["1f1f5-1f1ec"],':pg:':["1f1f5-1f1ec"],':flag_pf:':["1f1f5-1f1eb"],':pf:':["1f1f5-1f1eb"],':flag_pe:':["1f1f5-1f1ea"],':pe:':["1f1f5-1f1ea"],':flag_pa:':["1f1f5-1f1e6"],':pa:':["1f1f5-1f1e6"],':flag_om:':["1f1f4-1f1f2"],':om:':["1f1f4-1f1f2"],':flag_nz:':["1f1f3-1f1ff"],':nz:':["1f1f3-1f1ff"],':flag_nu:':["1f1f3-1f1fa"],':nu:':["1f1f3-1f1fa"],':flag_nr:':["1f1f3-1f1f7"],':nr:':["1f1f3-1f1f7"],':flag_np:':["1f1f3-1f1f5"],':np:':["1f1f3-1f1f5"],':flag_no:':["1f1f3-1f1f4"],':no:':["1f1f3-1f1f4"],':flag_nl:':["1f1f3-1f1f1"],':nl:':["1f1f3-1f1f1"],':flag_ni:':["1f1f3-1f1ee"],':ni:':["1f1f3-1f1ee"],':flag_ng:':["1f1f3-1f1ec"],':nigeria:':["1f1f3-1f1ec"],':flag_nf:':["1f1f3-1f1eb"],':nf:':["1f1f3-1f1eb"],':flag_ne:':["1f1f3-1f1ea"],':ne:':["1f1f3-1f1ea"],':flag_nc:':["1f1f3-1f1e8"],':nc:':["1f1f3-1f1e8"],':flag_na:':["1f1f3-1f1e6"],':na:':["1f1f3-1f1e6"],':flag_mz:':["1f1f2-1f1ff"],':mz:':["1f1f2-1f1ff"],':flag_my:':["1f1f2-1f1fe"],':my:':["1f1f2-1f1fe"],':flag_mx:':["1f1f2-1f1fd"],':mx:':["1f1f2-1f1fd"],':flag_mw:':["1f1f2-1f1fc"],':mw:':["1f1f2-1f1fc"],':flag_mv:':["1f1f2-1f1fb"],':mv:':["1f1f2-1f1fb"],':flag_mu:':["1f1f2-1f1fa"],':mu:':["1f1f2-1f1fa"],':flag_mt:':["1f1f2-1f1f9"],':mt:':["1f1f2-1f1f9"],':flag_ms:':["1f1f2-1f1f8"],':ms:':["1f1f2-1f1f8"],':flag_mr:':["1f1f2-1f1f7"],':mr:':["1f1f2-1f1f7"],':flag_mq:':["1f1f2-1f1f6"],':mq:':["1f1f2-1f1f6"],':flag_mp:':["1f1f2-1f1f5"],':mp:':["1f1f2-1f1f5"],':flag_mo:':["1f1f2-1f1f4"],':mo:':["1f1f2-1f1f4"],':flag_mn:':["1f1f2-1f1f3"],':mn:':["1f1f2-1f1f3"],':flag_mm:':["1f1f2-1f1f2"],':mm:':["1f1f2-1f1f2"],':flag_ml:':["1f1f2-1f1f1"],':ml:':["1f1f2-1f1f1"],':flag_mk:':["1f1f2-1f1f0"],':mk:':["1f1f2-1f1f0"],':flag_mh:':["1f1f2-1f1ed"],':mh:':["1f1f2-1f1ed"],':flag_mg:':["1f1f2-1f1ec"],':mg:':["1f1f2-1f1ec"],':flag_mf:':["1f1f2-1f1eb"],':mf:':["1f1f2-1f1eb"],':flag_me:':["1f1f2-1f1ea"],':me:':["1f1f2-1f1ea"],':flag_md:':["1f1f2-1f1e9"],':md:':["1f1f2-1f1e9"],':flag_mc:':["1f1f2-1f1e8"],':mc:':["1f1f2-1f1e8"],':flag_ma:':["1f1f2-1f1e6"],':ma:':["1f1f2-1f1e6"],':flag_ly:':["1f1f1-1f1fe"],':ly:':["1f1f1-1f1fe"],':flag_lv:':["1f1f1-1f1fb"],':lv:':["1f1f1-1f1fb"],':flag_lu:':["1f1f1-1f1fa"],':lu:':["1f1f1-1f1fa"],':flag_lt:':["1f1f1-1f1f9"],':lt:':["1f1f1-1f1f9"],':flag_ls:':["1f1f1-1f1f8"],':ls:':["1f1f1-1f1f8"],':flag_lr:':["1f1f1-1f1f7"],':lr:':["1f1f1-1f1f7"],':flag_lk:':["1f1f1-1f1f0"],':lk:':["1f1f1-1f1f0"],':flag_li:':["1f1f1-1f1ee"],':li:':["1f1f1-1f1ee"],':flag_lc:':["1f1f1-1f1e8"],':lc:':["1f1f1-1f1e8"],':flag_lb:':["1f1f1-1f1e7"],':lb:':["1f1f1-1f1e7"],':flag_la:':["1f1f1-1f1e6"],':la:':["1f1f1-1f1e6"],':flag_kz:':["1f1f0-1f1ff"],':kz:':["1f1f0-1f1ff"],':flag_ky:':["1f1f0-1f1fe"],':ky:':["1f1f0-1f1fe"],':flag_kw:':["1f1f0-1f1fc"],':kw:':["1f1f0-1f1fc"],':flag_kr:':["1f1f0-1f1f7"],':kr:':["1f1f0-1f1f7"],':flag_kp:':["1f1f0-1f1f5"],':kp:':["1f1f0-1f1f5"],':flag_kn:':["1f1f0-1f1f3"],':kn:':["1f1f0-1f1f3"],':flag_km:':["1f1f0-1f1f2"],':km:':["1f1f0-1f1f2"],':flag_ki:':["1f1f0-1f1ee"],':ki:':["1f1f0-1f1ee"],':flag_kh:':["1f1f0-1f1ed"],':kh:':["1f1f0-1f1ed"],':flag_kg:':["1f1f0-1f1ec"],':kg:':["1f1f0-1f1ec"],':flag_ke:':["1f1f0-1f1ea"],':ke:':["1f1f0-1f1ea"],':flag_jp:':["1f1ef-1f1f5"],':jp:':["1f1ef-1f1f5"],':flag_jo:':["1f1ef-1f1f4"],':jo:':["1f1ef-1f1f4"],':flag_jm:':["1f1ef-1f1f2"],':jm:':["1f1ef-1f1f2"],':flag_je:':["1f1ef-1f1ea"],':je:':["1f1ef-1f1ea"],':flag_it:':["1f1ee-1f1f9"],':it:':["1f1ee-1f1f9"],':flag_is:':["1f1ee-1f1f8"],':is:':["1f1ee-1f1f8"],':flag_ir:':["1f1ee-1f1f7"],':ir:':["1f1ee-1f1f7"],':flag_iq:':["1f1ee-1f1f6"],':iq:':["1f1ee-1f1f6"],':flag_io:':["1f1ee-1f1f4"],':io:':["1f1ee-1f1f4"],':flag_in:':["1f1ee-1f1f3"],':in:':["1f1ee-1f1f3"],':flag_im:':["1f1ee-1f1f2"],':im:':["1f1ee-1f1f2"],':flag_il:':["1f1ee-1f1f1"],':il:':["1f1ee-1f1f1"],':flag_ie:':["1f1ee-1f1ea"],':ie:':["1f1ee-1f1ea"],':flag_id:':["1f1ee-1f1e9"],':indonesia:':["1f1ee-1f1e9"],':flag_ic:':["1f1ee-1f1e8"],':ic:':["1f1ee-1f1e8"],':flag_hu:':["1f1ed-1f1fa"],':hu:':["1f1ed-1f1fa"],':flag_ht:':["1f1ed-1f1f9"],':ht:':["1f1ed-1f1f9"],':flag_hr:':["1f1ed-1f1f7"],':hr:':["1f1ed-1f1f7"],':flag_hn:':["1f1ed-1f1f3"],':hn:':["1f1ed-1f1f3"],':flag_hm:':["1f1ed-1f1f2"],':hm:':["1f1ed-1f1f2"],':flag_hk:':["1f1ed-1f1f0"],':hk:':["1f1ed-1f1f0"],':flag_gy:':["1f1ec-1f1fe"],':gy:':["1f1ec-1f1fe"],':flag_gw:':["1f1ec-1f1fc"],':gw:':["1f1ec-1f1fc"],':flag_gu:':["1f1ec-1f1fa"],':gu:':["1f1ec-1f1fa"],':flag_gt:':["1f1ec-1f1f9"],':gt:':["1f1ec-1f1f9"],':flag_gs:':["1f1ec-1f1f8"],':gs:':["1f1ec-1f1f8"],':flag_gr:':["1f1ec-1f1f7"],':gr:':["1f1ec-1f1f7"],':flag_gq:':["1f1ec-1f1f6"],':gq:':["1f1ec-1f1f6"],':flag_gp:':["1f1ec-1f1f5"],':gp:':["1f1ec-1f1f5"],':flag_gn:':["1f1ec-1f1f3"],':gn:':["1f1ec-1f1f3"],':flag_gm:':["1f1ec-1f1f2"],':gm:':["1f1ec-1f1f2"],':flag_gl:':["1f1ec-1f1f1"],':gl:':["1f1ec-1f1f1"],':flag_gi:':["1f1ec-1f1ee"],':gi:':["1f1ec-1f1ee"],':flag_gh:':["1f1ec-1f1ed"],':gh:':["1f1ec-1f1ed"],':flag_gg:':["1f1ec-1f1ec"],':gg:':["1f1ec-1f1ec"],':flag_gf:':["1f1ec-1f1eb"],':gf:':["1f1ec-1f1eb"],':flag_ge:':["1f1ec-1f1ea"],':ge:':["1f1ec-1f1ea"],':flag_gd:':["1f1ec-1f1e9"],':gd:':["1f1ec-1f1e9"],':flag_gb:':["1f1ec-1f1e7"],':gb:':["1f1ec-1f1e7"],':flag_ga:':["1f1ec-1f1e6"],':ga:':["1f1ec-1f1e6"],':flag_fr:':["1f1eb-1f1f7"],':fr:':["1f1eb-1f1f7"],':flag_fo:':["1f1eb-1f1f4"],':fo:':["1f1eb-1f1f4"],':flag_fm:':["1f1eb-1f1f2"],':fm:':["1f1eb-1f1f2"],':flag_fk:':["1f1eb-1f1f0"],':fk:':["1f1eb-1f1f0"],':flag_fj:':["1f1eb-1f1ef"],':fj:':["1f1eb-1f1ef"],':flag_fi:':["1f1eb-1f1ee"],':fi:':["1f1eb-1f1ee"],':flag_eu:':["1f1ea-1f1fa"],':eu:':["1f1ea-1f1fa"],':flag_et:':["1f1ea-1f1f9"],':et:':["1f1ea-1f1f9"],':flag_es:':["1f1ea-1f1f8"],':es:':["1f1ea-1f1f8"],':flag_er:':["1f1ea-1f1f7"],':er:':["1f1ea-1f1f7"],':flag_eh:':["1f1ea-1f1ed"],':eh:':["1f1ea-1f1ed"],':flag_eg:':["1f1ea-1f1ec"],':eg:':["1f1ea-1f1ec"],':flag_ee:':["1f1ea-1f1ea"],':ee:':["1f1ea-1f1ea"],':flag_ec:':["1f1ea-1f1e8"],':ec:':["1f1ea-1f1e8"],':flag_ea:':["1f1ea-1f1e6"],':ea:':["1f1ea-1f1e6"],':flag_dz:':["1f1e9-1f1ff"],':dz:':["1f1e9-1f1ff"],':flag_do:':["1f1e9-1f1f4"],':do:':["1f1e9-1f1f4"],':flag_dm:':["1f1e9-1f1f2"],':dm:':["1f1e9-1f1f2"],':flag_dk:':["1f1e9-1f1f0"],':dk:':["1f1e9-1f1f0"],':flag_dj:':["1f1e9-1f1ef"],':dj:':["1f1e9-1f1ef"],':flag_dg:':["1f1e9-1f1ec"],':dg:':["1f1e9-1f1ec"],':flag_de:':["1f1e9-1f1ea"],':de:':["1f1e9-1f1ea"],':flag_cz:':["1f1e8-1f1ff"],':cz:':["1f1e8-1f1ff"],':flag_cy:':["1f1e8-1f1fe"],':cy:':["1f1e8-1f1fe"],':flag_cx:':["1f1e8-1f1fd"],':cx:':["1f1e8-1f1fd"],':flag_cw:':["1f1e8-1f1fc"],':cw:':["1f1e8-1f1fc"],':flag_cv:':["1f1e8-1f1fb"],':cv:':["1f1e8-1f1fb"],':flag_cu:':["1f1e8-1f1fa"],':cu:':["1f1e8-1f1fa"],':flag_cr:':["1f1e8-1f1f7"],':cr:':["1f1e8-1f1f7"],':flag_cp:':["1f1e8-1f1f5"],':cp:':["1f1e8-1f1f5"],':flag_co:':["1f1e8-1f1f4"],':co:':["1f1e8-1f1f4"],':flag_cn:':["1f1e8-1f1f3"],':cn:':["1f1e8-1f1f3"],':flag_cm:':["1f1e8-1f1f2"],':cm:':["1f1e8-1f1f2"],':flag_cl:':["1f1e8-1f1f1"],':chile:':["1f1e8-1f1f1"],':flag_ck:':["1f1e8-1f1f0"],':ck:':["1f1e8-1f1f0"],':flag_ci:':["1f1e8-1f1ee"],':ci:':["1f1e8-1f1ee"],':flag_ch:':["1f1e8-1f1ed"],':ch:':["1f1e8-1f1ed"],':flag_cg:':["1f1e8-1f1ec"],':cg:':["1f1e8-1f1ec"],':flag_cf:':["1f1e8-1f1eb"],':cf:':["1f1e8-1f1eb"],':flag_cd:':["1f1e8-1f1e9"],':congo:':["1f1e8-1f1e9"],':flag_cc:':["1f1e8-1f1e8"],':cc:':["1f1e8-1f1e8"],':flag_ca:':["1f1e8-1f1e6"],':ca:':["1f1e8-1f1e6"],':flag_bz:':["1f1e7-1f1ff"],':bz:':["1f1e7-1f1ff"],':flag_by:':["1f1e7-1f1fe"],':by:':["1f1e7-1f1fe"],':flag_bw:':["1f1e7-1f1fc"],':bw:':["1f1e7-1f1fc"],':flag_bv:':["1f1e7-1f1fb"],':bv:':["1f1e7-1f1fb"],':flag_bt:':["1f1e7-1f1f9"],':bt:':["1f1e7-1f1f9"],':flag_bs:':["1f1e7-1f1f8"],':bs:':["1f1e7-1f1f8"],':flag_br:':["1f1e7-1f1f7"],':br:':["1f1e7-1f1f7"],':flag_bq:':["1f1e7-1f1f6"],':bq:':["1f1e7-1f1f6"],':flag_bo:':["1f1e7-1f1f4"],':bo:':["1f1e7-1f1f4"],':flag_bn:':["1f1e7-1f1f3"],':bn:':["1f1e7-1f1f3"],':flag_bm:':["1f1e7-1f1f2"],':bm:':["1f1e7-1f1f2"],':flag_bl:':["1f1e7-1f1f1"],':bl:':["1f1e7-1f1f1"],':flag_bj:':["1f1e7-1f1ef"],':bj:':["1f1e7-1f1ef"],':flag_bi:':["1f1e7-1f1ee"],':bi:':["1f1e7-1f1ee"],':flag_bh:':["1f1e7-1f1ed"],':bh:':["1f1e7-1f1ed"],':flag_bg:':["1f1e7-1f1ec"],':bg:':["1f1e7-1f1ec"],':flag_bf:':["1f1e7-1f1eb"],':bf:':["1f1e7-1f1eb"],':flag_be:':["1f1e7-1f1ea"],':be:':["1f1e7-1f1ea"],':flag_bd:':["1f1e7-1f1e9"],':bd:':["1f1e7-1f1e9"],':flag_bb:':["1f1e7-1f1e7"],':bb:':["1f1e7-1f1e7"],':flag_ba:':["1f1e7-1f1e6"],':ba:':["1f1e7-1f1e6"],':flag_az:':["1f1e6-1f1ff"],':az:':["1f1e6-1f1ff"],':flag_ax:':["1f1e6-1f1fd"],':ax:':["1f1e6-1f1fd"],':flag_aw:':["1f1e6-1f1fc"],':aw:':["1f1e6-1f1fc"],':flag_au:':["1f1e6-1f1fa"],':au:':["1f1e6-1f1fa"],':flag_at:':["1f1e6-1f1f9"],':at:':["1f1e6-1f1f9"],':flag_as:':["1f1e6-1f1f8"],':as:':["1f1e6-1f1f8"],':flag_ar:':["1f1e6-1f1f7"],':ar:':["1f1e6-1f1f7"],':flag_aq:':["1f1e6-1f1f6"],':aq:':["1f1e6-1f1f6"],':flag_ao:':["1f1e6-1f1f4"],':ao:':["1f1e6-1f1f4"],':flag_am:':["1f1e6-1f1f2"],':am:':["1f1e6-1f1f2"],':flag_al:':["1f1e6-1f1f1"],':al:':["1f1e6-1f1f1"],':flag_ai:':["1f1e6-1f1ee"],':ai:':["1f1e6-1f1ee"],':flag_ag:':["1f1e6-1f1ec"],':ag:':["1f1e6-1f1ec"],':flag_af:':["1f1e6-1f1eb"],':af:':["1f1e6-1f1eb"],':flag_ae:':["1f1e6-1f1ea"],':ae:':["1f1e6-1f1ea"],':flag_ad:':["1f1e6-1f1e9"],':ad:':["1f1e6-1f1e9"],':flag_ac:':["1f1e6-1f1e8"],':ac:':["1f1e6-1f1e8"],':mahjong:':["1f004-fe0f","1f004"],':parking:':["1f17f-fe0f","1f17f"],':sa:':["1f202-fe0f","1f202"],':u7121:':["1f21a-fe0f","1f21a"],':u6307:':["1f22f-fe0f","1f22f"],':u6708:':["1f237-fe0f","1f237"],':film_frames:':["1f39e-fe0f","1f39e"],':tickets:':["1f39f-fe0f","1f39f"],':admission_tickets:':["1f39f-fe0f","1f39f"],':lifter:':["1f3cb-fe0f","1f3cb"],':weight_lifter:':["1f3cb-fe0f","1f3cb"],':golfer:':["1f3cc-fe0f","1f3cc"],':motorcycle:':["1f3cd-fe0f","1f3cd"],':racing_motorcycle:':["1f3cd-fe0f","1f3cd"],':race_car:':["1f3ce-fe0f","1f3ce"],':racing_car:':["1f3ce-fe0f","1f3ce"],':military_medal:':["1f396-fe0f","1f396"],':reminder_ribbon:':["1f397-fe0f","1f397"],':hot_pepper:':["1f336-fe0f","1f336"],':cloud_rain:':["1f327-fe0f","1f327"],':cloud_with_rain:':["1f327-fe0f","1f327"],':cloud_snow:':["1f328-fe0f","1f328"],':cloud_with_snow:':["1f328-fe0f","1f328"],':cloud_lightning:':["1f329-fe0f","1f329"],':cloud_with_lightning:':["1f329-fe0f","1f329"],':cloud_tornado:':["1f32a-fe0f","1f32a"],':cloud_with_tornado:':["1f32a-fe0f","1f32a"],':fog:':["1f32b-fe0f","1f32b"],':wind_blowing_face:':["1f32c-fe0f","1f32c"],':chipmunk:':["1f43f-fe0f","1f43f"],':spider:':["1f577-fe0f","1f577"],':spider_web:':["1f578-fe0f","1f578"],':thermometer:':["1f321-fe0f","1f321"],':microphone2:':["1f399-fe0f","1f399"],':studio_microphone:':["1f399-fe0f","1f399"],':level_slider:':["1f39a-fe0f","1f39a"],':control_knobs:':["1f39b-fe0f","1f39b"],':flag_white:':["1f3f3-fe0f","1f3f3"],':waving_white_flag:':["1f3f3-fe0f","1f3f3"],':rosette:':["1f3f5-fe0f","1f3f5"],':label:':["1f3f7-fe0f","1f3f7"],':projector:':["1f4fd-fe0f","1f4fd"],':film_projector:':["1f4fd-fe0f","1f4fd"],':om_symbol:':["1f549-fe0f","1f549"],':dove:':["1f54a-fe0f","1f54a"],':dove_of_peace:':["1f54a-fe0f","1f54a"],':candle:':["1f56f-fe0f","1f56f"],':clock:':["1f570-fe0f","1f570"],':mantlepiece_clock:':["1f570-fe0f","1f570"],':hole:':["1f573-fe0f","1f573"],':dark_sunglasses:':["1f576-fe0f","1f576"],':joystick:':["1f579-fe0f","1f579"],':paperclips:':["1f587-fe0f","1f587"],':linked_paperclips:':["1f587-fe0f","1f587"],':pen_ballpoint:':["1f58a-fe0f","1f58a"],':lower_left_ballpoint_pen:':["1f58a-fe0f","1f58a"],':pen_fountain:':["1f58b-fe0f","1f58b"],':lower_left_fountain_pen:':["1f58b-fe0f","1f58b"],':paintbrush:':["1f58c-fe0f","1f58c"],':lower_left_paintbrush:':["1f58c-fe0f","1f58c"],':crayon:':["1f58d-fe0f","1f58d"],':lower_left_crayon:':["1f58d-fe0f","1f58d"],':desktop:':["1f5a5-fe0f","1f5a5"],':desktop_computer:':["1f5a5-fe0f","1f5a5"],':printer:':["1f5a8-fe0f","1f5a8"],':trackball:':["1f5b2-fe0f","1f5b2"],':frame_photo:':["1f5bc-fe0f","1f5bc"],':frame_with_picture:':["1f5bc-fe0f","1f5bc"],':dividers:':["1f5c2-fe0f","1f5c2"],':card_index_dividers:':["1f5c2-fe0f","1f5c2"],':card_box:':["1f5c3-fe0f","1f5c3"],':card_file_box:':["1f5c3-fe0f","1f5c3"],':file_cabinet:':["1f5c4-fe0f","1f5c4"],':wastebasket:':["1f5d1-fe0f","1f5d1"],':notepad_spiral:':["1f5d2-fe0f","1f5d2"],':spiral_note_pad:':["1f5d2-fe0f","1f5d2"],':calendar_spiral:':["1f5d3-fe0f","1f5d3"],':spiral_calendar_pad:':["1f5d3-fe0f","1f5d3"],':compression:':["1f5dc-fe0f","1f5dc"],':key2:':["1f5dd-fe0f","1f5dd"],':old_key:':["1f5dd-fe0f","1f5dd"],':newspaper2:':["1f5de-fe0f","1f5de"],':rolled_up_newspaper:':["1f5de-fe0f","1f5de"],':dagger:':["1f5e1-fe0f","1f5e1"],':dagger_knife:':["1f5e1-fe0f","1f5e1"],':speaking_head:':["1f5e3-fe0f","1f5e3"],':speaking_head_in_silhouette:':["1f5e3-fe0f","1f5e3"],':anger_right:':["1f5ef-fe0f","1f5ef"],':right_anger_bubble:':["1f5ef-fe0f","1f5ef"],':ballot_box:':["1f5f3-fe0f","1f5f3"],':ballot_box_with_ballot:':["1f5f3-fe0f","1f5f3"],':map:':["1f5fa-fe0f","1f5fa"],':world_map:':["1f5fa-fe0f","1f5fa"],':tools:':["1f6e0-fe0f","1f6e0"],':hammer_and_wrench:':["1f6e0-fe0f","1f6e0"],':shield:':["1f6e1-fe0f","1f6e1"],':oil:':["1f6e2-fe0f","1f6e2"],':oil_drum:':["1f6e2-fe0f","1f6e2"],':satellite_orbital:':["1f6f0-fe0f","1f6f0"],':fork_knife_plate:':["1f37d-fe0f","1f37d"],':fork_and_knife_with_plate:':["1f37d-fe0f","1f37d"],':eye:':["1f441-fe0f","1f441"],':levitate:':["1f574-fe0f","1f574"],':man_in_business_suit_levitating:':["1f574-fe0f","1f574"],':spy:':["1f575-fe0f","1f575"],':sleuth_or_spy:':["1f575-fe0f","1f575"],':hand_splayed:':["1f590-fe0f","1f590"],':raised_hand_with_fingers_splayed:':["1f590-fe0f","1f590"],':mountain_snow:':["1f3d4-fe0f","1f3d4"],':snow_capped_mountain:':["1f3d4-fe0f","1f3d4"],':camping:':["1f3d5-fe0f","1f3d5"],':beach:':["1f3d6-fe0f","1f3d6"],':beach_with_umbrella:':["1f3d6-fe0f","1f3d6"],':construction_site:':["1f3d7-fe0f","1f3d7"],':building_construction:':["1f3d7-fe0f","1f3d7"],':homes:':["1f3d8-fe0f","1f3d8"],':house_buildings:':["1f3d8-fe0f","1f3d8"],':cityscape:':["1f3d9-fe0f","1f3d9"],':house_abandoned:':["1f3da-fe0f","1f3da"],':derelict_house_building:':["1f3da-fe0f","1f3da"],':classical_building:':["1f3db-fe0f","1f3db"],':desert:':["1f3dc-fe0f","1f3dc"],':island:':["1f3dd-fe0f","1f3dd"],':desert_island:':["1f3dd-fe0f","1f3dd"],':park:':["1f3de-fe0f","1f3de"],':national_park:':["1f3de-fe0f","1f3de"],':stadium:':["1f3df-fe0f","1f3df"],':couch:':["1f6cb-fe0f","1f6cb"],':couch_and_lamp:':["1f6cb-fe0f","1f6cb"],':shopping_bags:':["1f6cd-fe0f","1f6cd"],':bellhop:':["1f6ce-fe0f","1f6ce"],':bellhop_bell:':["1f6ce-fe0f","1f6ce"],':bed:':["1f6cf-fe0f","1f6cf"],':motorway:':["1f6e3-fe0f","1f6e3"],':railway_track:':["1f6e4-fe0f","1f6e4"],':railroad_track:':["1f6e4-fe0f","1f6e4"],':motorboat:':["1f6e5-fe0f","1f6e5"],':airplane_small:':["1f6e9-fe0f","1f6e9"],':small_airplane:':["1f6e9-fe0f","1f6e9"],':cruise_ship:':["1f6f3-fe0f","1f6f3"],':passenger_ship:':["1f6f3-fe0f","1f6f3"],':white_sun_small_cloud:':["1f324-fe0f","1f324"],':white_sun_with_small_cloud:':["1f324-fe0f","1f324"],':white_sun_cloud:':["1f325-fe0f","1f325"],':white_sun_behind_cloud:':["1f325-fe0f","1f325"],':white_sun_rain_cloud:':["1f326-fe0f","1f326"],':white_sun_behind_cloud_with_rain:':["1f326-fe0f","1f326"],':mouse_three_button:':["1f5b1-fe0f","1f5b1"],':three_button_mouse:':["1f5b1-fe0f","1f5b1"],':point_up_tone1:':["261d-1f3fb"],':point_up_tone2:':["261d-1f3fc"],':point_up_tone3:':["261d-1f3fd"],':point_up_tone4:':["261d-1f3fe"],':point_up_tone5:':["261d-1f3ff"],':v_tone1:':["270c-1f3fb"],':v_tone2:':["270c-1f3fc"],':v_tone3:':["270c-1f3fd"],':v_tone4:':["270c-1f3fe"],':v_tone5:':["270c-1f3ff"],':fist_tone1:':["270a-1f3fb"],':fist_tone2:':["270a-1f3fc"],':fist_tone3:':["270a-1f3fd"],':fist_tone4:':["270a-1f3fe"],':fist_tone5:':["270a-1f3ff"],':raised_hand_tone1:':["270b-1f3fb"],':raised_hand_tone2:':["270b-1f3fc"],':raised_hand_tone3:':["270b-1f3fd"],':raised_hand_tone4:':["270b-1f3fe"],':raised_hand_tone5:':["270b-1f3ff"],':writing_hand_tone1:':["270d-1f3fb"],':writing_hand_tone2:':["270d-1f3fc"],':writing_hand_tone3:':["270d-1f3fd"],':writing_hand_tone4:':["270d-1f3fe"],':writing_hand_tone5:':["270d-1f3ff"],':basketball_player_tone1:':["26f9-1f3fb"],':person_with_ball_tone1:':["26f9-1f3fb"],':basketball_player_tone2:':["26f9-1f3fc"],':person_with_ball_tone2:':["26f9-1f3fc"],':basketball_player_tone3:':["26f9-1f3fd"],':person_with_ball_tone3:':["26f9-1f3fd"],':basketball_player_tone4:':["26f9-1f3fe"],':person_with_ball_tone4:':["26f9-1f3fe"],':basketball_player_tone5:':["26f9-1f3ff"],':person_with_ball_tone5:':["26f9-1f3ff"],':copyright:':["00a9-fe0f","00a9"],':registered:':["00ae-fe0f","00ae"],':bangbang:':["203c-fe0f","203c"],':interrobang:':["2049-fe0f","2049"],':tm:':["2122-fe0f","2122"],':information_source:':["2139-fe0f","2139"],':left_right_arrow:':["2194-fe0f","2194"],':arrow_up_down:':["2195-fe0f","2195"],':arrow_upper_left:':["2196-fe0f","2196"],':arrow_upper_right:':["2197-fe0f","2197"],':arrow_lower_right:':["2198-fe0f","2198"],':arrow_lower_left:':["2199-fe0f","2199"],':leftwards_arrow_with_hook:':["21a9-fe0f","21a9"],':arrow_right_hook:':["21aa-fe0f","21aa"],':watch:':["231a-fe0f","231a"],':hourglass:':["231b-fe0f","231b"],':m:':["24c2-fe0f","24c2"],':black_small_square:':["25aa-fe0f","25aa"],':white_small_square:':["25ab-fe0f","25ab"],':arrow_forward:':["25b6-fe0f","25b6"],':arrow_backward:':["25c0-fe0f","25c0"],':white_medium_square:':["25fb-fe0f","25fb"],':black_medium_square:':["25fc-fe0f","25fc"],':white_medium_small_square:':["25fd-fe0f","25fd"],':black_medium_small_square:':["25fe-fe0f","25fe"],':sunny:':["2600-fe0f","2600"],':cloud:':["2601-fe0f","2601"],':telephone:':["260e-fe0f","260e"],':ballot_box_with_check:':["2611-fe0f","2611"],':umbrella:':["2614-fe0f","2614"],':coffee:':["2615-fe0f","2615"],':point_up:':["261d-fe0f","261d"],':relaxed:':["263a-fe0f","263a"],':aries:':["2648-fe0f","2648"],':taurus:':["2649-fe0f","2649"],':gemini:':["264a-fe0f","264a"],':cancer:':["264b-fe0f","264b"],':leo:':["264c-fe0f","264c"],':virgo:':["264d-fe0f","264d"],':libra:':["264e-fe0f","264e"],':scorpius:':["264f-fe0f","264f"],':sagittarius:':["2650-fe0f","2650"],':capricorn:':["2651-fe0f","2651"],':aquarius:':["2652-fe0f","2652"],':pisces:':["2653-fe0f","2653"],':spades:':["2660-fe0f","2660"],':clubs:':["2663-fe0f","2663"],':hearts:':["2665-fe0f","2665"],':diamonds:':["2666-fe0f","2666"],':hotsprings:':["2668-fe0f","2668"],':recycle:':["267b-fe0f","267b"],':wheelchair:':["267f-fe0f","267f"],':anchor:':["2693-fe0f","2693"],':warning:':["26a0-fe0f","26a0"],':zap:':["26a1-fe0f","26a1"],':white_circle:':["26aa-fe0f","26aa"],':black_circle:':["26ab-fe0f","26ab"],':soccer:':["26bd-fe0f","26bd"],':baseball:':["26be-fe0f","26be"],':snowman:':["26c4-fe0f","26c4"],':partly_sunny:':["26c5-fe0f","26c5"],':no_entry:':["26d4-fe0f","26d4"],':church:':["26ea-fe0f","26ea"],':fountain:':["26f2-fe0f","26f2"],':golf:':["26f3-fe0f","26f3"],':sailboat:':["26f5-fe0f","26f5"],':tent:':["26fa-fe0f","26fa"],':fuelpump:':["26fd-fe0f","26fd"],':scissors:':["2702-fe0f","2702"],':airplane:':["2708-fe0f","2708"],':envelope:':["2709-fe0f","2709"],':v:':["270c-fe0f","270c"],':pencil2:':["270f-fe0f","270f"],':black_nib:':["2712-fe0f","2712"],':heavy_check_mark:':["2714-fe0f","2714"],':heavy_multiplication_x:':["2716-fe0f","2716"],':eight_spoked_asterisk:':["2733-fe0f","2733"],':eight_pointed_black_star:':["2734-fe0f","2734"],':snowflake:':["2744-fe0f","2744"],':sparkle:':["2747-fe0f","2747"],':exclamation:':["2757-fe0f","2757"],':heart:':["2764-fe0f","2764"],':arrow_right:':["27a1-fe0f","27a1"],':arrow_heading_up:':["2934-fe0f","2934"],':arrow_heading_down:':["2935-fe0f","2935"],':arrow_left:':["2b05-fe0f","2b05"],':arrow_up:':["2b06-fe0f","2b06"],':arrow_down:':["2b07-fe0f","2b07"],':black_large_square:':["2b1b-fe0f","2b1b"],':white_large_square:':["2b1c-fe0f","2b1c"],':star:':["2b50-fe0f","2b50"],':o:':["2b55-fe0f","2b55"],':wavy_dash:':["3030-fe0f","3030"],':part_alternation_mark:':["303d-fe0f","303d"],':congratulations:':["3297-fe0f","3297"],':secret:':["3299-fe0f","3299"],':cross:':["271d-fe0f","271d"],':latin_cross:':["271d-fe0f","271d"],':keyboard:':["2328-fe0f","2328"],':writing_hand:':["270d-fe0f","270d"],':track_next:':["23ed-fe0f","23ed"],':next_track:':["23ed-fe0f","23ed"],':track_previous:':["23ee-fe0f","23ee"],':previous_track:':["23ee-fe0f","23ee"],':play_pause:':["23ef-fe0f","23ef"],':stopwatch:':["23f1-fe0f","23f1"],':timer:':["23f2-fe0f","23f2"],':timer_clock:':["23f2-fe0f","23f2"],':pause_button:':["23f8-fe0f","23f8"],':double_vertical_bar:':["23f8-fe0f","23f8"],':stop_button:':["23f9-fe0f","23f9"],':record_button:':["23fa-fe0f","23fa"],':umbrella2:':["2602-fe0f","2602"],':snowman2:':["2603-fe0f","2603"],':comet:':["2604-fe0f","2604"],':shamrock:':["2618-fe0f","2618"],':skull_crossbones:':["2620-fe0f","2620"],':skull_and_crossbones:':["2620-fe0f","2620"],':radioactive:':["2622-fe0f","2622"],':radioactive_sign:':["2622-fe0f","2622"],':biohazard:':["2623-fe0f","2623"],':biohazard_sign:':["2623-fe0f","2623"],':orthodox_cross:':["2626-fe0f","2626"],':star_and_crescent:':["262a-fe0f","262a"],':peace:':["262e-fe0f","262e"],':peace_symbol:':["262e-fe0f","262e"],':yin_yang:':["262f-fe0f","262f"],':wheel_of_dharma:':["2638-fe0f","2638"],':frowning2:':["2639-fe0f","2639"],':white_frowning_face:':["2639-fe0f","2639"],':hammer_pick:':["2692-fe0f","2692"],':hammer_and_pick:':["2692-fe0f","2692"],':crossed_swords:':["2694-fe0f","2694"],':scales:':["2696-fe0f","2696"],':alembic:':["2697-fe0f","2697"],':gear:':["2699-fe0f","2699"],':atom:':["269b-fe0f","269b"],':atom_symbol:':["269b-fe0f","269b"],':fleur-de-lis:':["269c-fe0f","269c"],':coffin:':["26b0-fe0f","26b0"],':urn:':["26b1-fe0f","26b1"],':funeral_urn:':["26b1-fe0f","26b1"],':thunder_cloud_rain:':["26c8-fe0f","26c8"],':thunder_cloud_and_rain:':["26c8-fe0f","26c8"],':pick:':["26cf-fe0f","26cf"],':helmet_with_cross:':["26d1-fe0f","26d1"],':helmet_with_white_cross:':["26d1-fe0f","26d1"],':chains:':["26d3-fe0f","26d3"],':shinto_shrine:':["26e9-fe0f","26e9"],':mountain:':["26f0-fe0f","26f0"],':beach_umbrella:':["26f1-fe0f","26f1"],':umbrella_on_ground:':["26f1-fe0f","26f1"],':ferry:':["26f4-fe0f","26f4"],':skier:':["26f7-fe0f","26f7"],':ice_skate:':["26f8-fe0f","26f8"],':basketball_player:':["26f9-fe0f","26f9"],':person_with_ball:':["26f9-fe0f","26f9"],':star_of_david:':["2721-fe0f","2721"],':heart_exclamation:':["2763-fe0f","2763"],':heavy_heart_exclamation_mark_ornament:':["2763-fe0f","2763"],':black_joker:':["1f0cf"],':a:':["1f170"],':b:':["1f171"],':o2:':["1f17e"],':ab:':["1f18e"],':cl:':["1f191"],':cool:':["1f192"],':free:':["1f193"],':id:':["1f194"],':new:':["1f195"],':ng:':["1f196"],':ok:':["1f197"],':sos:':["1f198"],':up:':["1f199"],':vs:':["1f19a"],':koko:':["1f201"],':u7981:':["1f232"],':u7a7a:':["1f233"],':u5408:':["1f234"],':u6e80:':["1f235"],':u6709:':["1f236"],':u7533:':["1f238"],':u5272:':["1f239"],':u55b6:':["1f23a"],':ideograph_advantage:':["1f250"],':accept:':["1f251"],':cyclone:':["1f300"],':foggy:':["1f301"],':closed_umbrella:':["1f302"],':night_with_stars:':["1f303"],':sunrise_over_mountains:':["1f304"],':sunrise:':["1f305"],':city_dusk:':["1f306"],':city_sunset:':["1f307"],':city_sunrise:':["1f307"],':rainbow:':["1f308"],':bridge_at_night:':["1f309"],':ocean:':["1f30a"],':volcano:':["1f30b"],':milky_way:':["1f30c"],':earth_asia:':["1f30f"],':new_moon:':["1f311"],':first_quarter_moon:':["1f313"],':waxing_gibbous_moon:':["1f314"],':full_moon:':["1f315"],':crescent_moon:':["1f319"],':first_quarter_moon_with_face:':["1f31b"],':star2:':["1f31f"],':stars:':["1f320"],':chestnut:':["1f330"],':seedling:':["1f331"],':palm_tree:':["1f334"],':cactus:':["1f335"],':tulip:':["1f337"],':cherry_blossom:':["1f338"],':rose:':["1f339"],':hibiscus:':["1f33a"],':sunflower:':["1f33b"],':blossom:':["1f33c"],':corn:':["1f33d"],':ear_of_rice:':["1f33e"],':herb:':["1f33f"],':four_leaf_clover:':["1f340"],':maple_leaf:':["1f341"],':fallen_leaf:':["1f342"],':leaves:':["1f343"],':mushroom:':["1f344"],':tomato:':["1f345"],':eggplant:':["1f346"],':grapes:':["1f347"],':melon:':["1f348"],':watermelon:':["1f349"],':tangerine:':["1f34a"],':banana:':["1f34c"],':pineapple:':["1f34d"],':apple:':["1f34e"],':green_apple:':["1f34f"],':peach:':["1f351"],':cherries:':["1f352"],':strawberry:':["1f353"],':hamburger:':["1f354"],':pizza:':["1f355"],':meat_on_bone:':["1f356"],':poultry_leg:':["1f357"],':rice_cracker:':["1f358"],':rice_ball:':["1f359"],':rice:':["1f35a"],':curry:':["1f35b"],':ramen:':["1f35c"],':spaghetti:':["1f35d"],':bread:':["1f35e"],':fries:':["1f35f"],':sweet_potato:':["1f360"],':dango:':["1f361"],':oden:':["1f362"],':sushi:':["1f363"],':fried_shrimp:':["1f364"],':fish_cake:':["1f365"],':icecream:':["1f366"],':shaved_ice:':["1f367"],':ice_cream:':["1f368"],':doughnut:':["1f369"],':cookie:':["1f36a"],':chocolate_bar:':["1f36b"],':candy:':["1f36c"],':lollipop:':["1f36d"],':custard:':["1f36e"],':honey_pot:':["1f36f"],':cake:':["1f370"],':bento:':["1f371"],':stew:':["1f372"],':egg:':["1f373"],':fork_and_knife:':["1f374"],':tea:':["1f375"],':sake:':["1f376"],':wine_glass:':["1f377"],':cocktail:':["1f378"],':tropical_drink:':["1f379"],':beer:':["1f37a"],':beers:':["1f37b"],':ribbon:':["1f380"],':gift:':["1f381"],':birthday:':["1f382"],':jack_o_lantern:':["1f383"],':christmas_tree:':["1f384"],':santa:':["1f385"],':fireworks:':["1f386"],':sparkler:':["1f387"],':balloon:':["1f388"],':tada:':["1f389"],':confetti_ball:':["1f38a"],':tanabata_tree:':["1f38b"],':crossed_flags:':["1f38c"],':bamboo:':["1f38d"],':dolls:':["1f38e"],':flags:':["1f38f"],':wind_chime:':["1f390"],':rice_scene:':["1f391"],':school_satchel:':["1f392"],':mortar_board:':["1f393"],':carousel_horse:':["1f3a0"],':ferris_wheel:':["1f3a1"],':roller_coaster:':["1f3a2"],':fishing_pole_and_fish:':["1f3a3"],':microphone:':["1f3a4"],':movie_camera:':["1f3a5"],':cinema:':["1f3a6"],':headphones:':["1f3a7"],':art:':["1f3a8"],':tophat:':["1f3a9"],':circus_tent:':["1f3aa"],':ticket:':["1f3ab"],':clapper:':["1f3ac"],':performing_arts:':["1f3ad"],':video_game:':["1f3ae"],':dart:':["1f3af"],':slot_machine:':["1f3b0"],':8ball:':["1f3b1"],':game_die:':["1f3b2"],':bowling:':["1f3b3"],':flower_playing_cards:':["1f3b4"],':musical_note:':["1f3b5"],':notes:':["1f3b6"],':saxophone:':["1f3b7"],':guitar:':["1f3b8"],':musical_keyboard:':["1f3b9"],':trumpet:':["1f3ba"],':violin:':["1f3bb"],':musical_score:':["1f3bc"],':running_shirt_with_sash:':["1f3bd"],':tennis:':["1f3be"],':ski:':["1f3bf"],':basketball:':["1f3c0"],':checkered_flag:':["1f3c1"],':snowboarder:':["1f3c2"],':runner:':["1f3c3"],':surfer:':["1f3c4"],':trophy:':["1f3c6"],':football:':["1f3c8"],':swimmer:':["1f3ca"],':house:':["1f3e0"],':house_with_garden:':["1f3e1"],':office:':["1f3e2"],':post_office:':["1f3e3"],':hospital:':["1f3e5"],':bank:':["1f3e6"],':atm:':["1f3e7"],':hotel:':["1f3e8"],':love_hotel:':["1f3e9"],':convenience_store:':["1f3ea"],':school:':["1f3eb"],':department_store:':["1f3ec"],':factory:':["1f3ed"],':izakaya_lantern:':["1f3ee"],':japanese_castle:':["1f3ef"],':european_castle:':["1f3f0"],':snail:':["1f40c"],':snake:':["1f40d"],':racehorse:':["1f40e"],':sheep:':["1f411"],':monkey:':["1f412"],':chicken:':["1f414"],':boar:':["1f417"],':elephant:':["1f418"],':octopus:':["1f419"],':shell:':["1f41a"],':bug:':["1f41b"],':ant:':["1f41c"],':bee:':["1f41d"],':beetle:':["1f41e"],':fish:':["1f41f"],':tropical_fish:':["1f420"],':blowfish:':["1f421"],':turtle:':["1f422"],':hatching_chick:':["1f423"],':baby_chick:':["1f424"],':hatched_chick:':["1f425"],':bird:':["1f426"],':penguin:':["1f427"],':koala:':["1f428"],':poodle:':["1f429"],':camel:':["1f42b"],':dolphin:':["1f42c"],':mouse:':["1f42d"],':cow:':["1f42e"],':tiger:':["1f42f"],':rabbit:':["1f430"],':cat:':["1f431"],':dragon_face:':["1f432"],':whale:':["1f433"],':horse:':["1f434"],':monkey_face:':["1f435"],':dog:':["1f436"],':pig:':["1f437"],':frog:':["1f438"],':hamster:':["1f439"],':wolf:':["1f43a"],':bear:':["1f43b"],':panda_face:':["1f43c"],':pig_nose:':["1f43d"],':feet:':["1f43e"],':paw_prints:':["1f43e"],':eyes:':["1f440"],':ear:':["1f442"],':nose:':["1f443"],':lips:':["1f444"],':tongue:':["1f445"],':point_up_2:':["1f446"],':point_down:':["1f447"],':point_left:':["1f448"],':point_right:':["1f449"],':punch:':["1f44a"],':wave:':["1f44b"],':ok_hand:':["1f44c"],':thumbsup:':["1f44d"],':+1:':["1f44d"],':thumbsdown:':["1f44e"],':-1:':["1f44e"],':clap:':["1f44f"],':open_hands:':["1f450"],':crown:':["1f451"],':womans_hat:':["1f452"],':eyeglasses:':["1f453"],':necktie:':["1f454"],':shirt:':["1f455"],':jeans:':["1f456"],':dress:':["1f457"],':kimono:':["1f458"],':bikini:':["1f459"],':womans_clothes:':["1f45a"],':purse:':["1f45b"],':handbag:':["1f45c"],':pouch:':["1f45d"],':mans_shoe:':["1f45e"],':athletic_shoe:':["1f45f"],':high_heel:':["1f460"],':sandal:':["1f461"],':boot:':["1f462"],':footprints:':["1f463"],':bust_in_silhouette:':["1f464"],':boy:':["1f466"],':girl:':["1f467"],':man:':["1f468"],':woman:':["1f469"],':family:':["1f46a"],':couple:':["1f46b"],':cop:':["1f46e"],':dancers:':["1f46f"],':bride_with_veil:':["1f470"],':person_with_blond_hair:':["1f471"],':man_with_gua_pi_mao:':["1f472"],':man_with_turban:':["1f473"],':older_man:':["1f474"],':older_woman:':["1f475"],':grandma:':["1f475"],':baby:':["1f476"],':construction_worker:':["1f477"],':princess:':["1f478"],':japanese_ogre:':["1f479"],':japanese_goblin:':["1f47a"],':ghost:':["1f47b"],':angel:':["1f47c"],':alien:':["1f47d"],':space_invader:':["1f47e"],':imp:':["1f47f"],':skull:':["1f480"],':skeleton:':["1f480"],':card_index:':["1f4c7"],':information_desk_person:':["1f481"],':guardsman:':["1f482"],':dancer:':["1f483"],':lipstick:':["1f484"],':nail_care:':["1f485"],':ledger:':["1f4d2"],':massage:':["1f486"],':notebook:':["1f4d3"],':haircut:':["1f487"],':notebook_with_decorative_cover:':["1f4d4"],':barber:':["1f488"],':closed_book:':["1f4d5"],':syringe:':["1f489"],':book:':["1f4d6"],':pill:':["1f48a"],':green_book:':["1f4d7"],':kiss:':["1f48b"],':blue_book:':["1f4d8"],':love_letter:':["1f48c"],':orange_book:':["1f4d9"],':ring:':["1f48d"],':books:':["1f4da"],':gem:':["1f48e"],':name_badge:':["1f4db"],':couplekiss:':["1f48f"],':scroll:':["1f4dc"],':bouquet:':["1f490"],':pencil:':["1f4dd"],':couple_with_heart:':["1f491"],':telephone_receiver:':["1f4de"],':wedding:':["1f492"],':pager:':["1f4df"],':fax:':["1f4e0"],':heartbeat:':["1f493"],':satellite:':["1f4e1"],':loudspeaker:':["1f4e2"],':broken_heart:':["1f494"],':mega:':["1f4e3"],':outbox_tray:':["1f4e4"],':two_hearts:':["1f495"],':inbox_tray:':["1f4e5"],':package:':["1f4e6"],':sparkling_heart:':["1f496"],':e-mail:':["1f4e7"],':email:':["1f4e7"],':incoming_envelope:':["1f4e8"],':heartpulse:':["1f497"],':envelope_with_arrow:':["1f4e9"],':mailbox_closed:':["1f4ea"],':cupid:':["1f498"],':mailbox:':["1f4eb"],':postbox:':["1f4ee"],':blue_heart:':["1f499"],':newspaper:':["1f4f0"],':iphone:':["1f4f1"],':green_heart:':["1f49a"],':calling:':["1f4f2"],':vibration_mode:':["1f4f3"],':yellow_heart:':["1f49b"],':mobile_phone_off:':["1f4f4"],':signal_strength:':["1f4f6"],':purple_heart:':["1f49c"],':camera:':["1f4f7"],':video_camera:':["1f4f9"],':gift_heart:':["1f49d"],':tv:':["1f4fa"],':radio:':["1f4fb"],':revolving_hearts:':["1f49e"],':vhs:':["1f4fc"],':arrows_clockwise:':["1f503"],':heart_decoration:':["1f49f"],':loud_sound:':["1f50a"],':battery:':["1f50b"],':diamond_shape_with_a_dot_inside:':["1f4a0"],':electric_plug:':["1f50c"],':mag:':["1f50d"],':bulb:':["1f4a1"],':mag_right:':["1f50e"],':lock_with_ink_pen:':["1f50f"],':anger:':["1f4a2"],':closed_lock_with_key:':["1f510"],':key:':["1f511"],':bomb:':["1f4a3"],':lock:':["1f512"],':unlock:':["1f513"],':zzz:':["1f4a4"],':bell:':["1f514"],':bookmark:':["1f516"],':boom:':["1f4a5"],':link:':["1f517"],':radio_button:':["1f518"],':sweat_drops:':["1f4a6"],':back:':["1f519"],':end:':["1f51a"],':droplet:':["1f4a7"],':on:':["1f51b"],':soon:':["1f51c"],':dash:':["1f4a8"],':top:':["1f51d"],':underage:':["1f51e"],':poop:':["1f4a9"],':shit:':["1f4a9"],':hankey:':["1f4a9"],':poo:':["1f4a9"],':ten:':["1f51f"],':muscle:':["1f4aa"],':capital_abcd:':["1f520"],':abcd:':["1f521"],':dizzy:':["1f4ab"],':1234:':["1f522"],':symbols:':["1f523"],':speech_balloon:':["1f4ac"],':abc:':["1f524"],':fire:':["1f525"],':flame:':["1f525"],':white_flower:':["1f4ae"],':flashlight:':["1f526"],':wrench:':["1f527"],':100:':["1f4af"],':hammer:':["1f528"],':nut_and_bolt:':["1f529"],':moneybag:':["1f4b0"],':knife:':["1f52a"],':gun:':["1f52b"],':currency_exchange:':["1f4b1"],':crystal_ball:':["1f52e"],':heavy_dollar_sign:':["1f4b2"],':six_pointed_star:':["1f52f"],':credit_card:':["1f4b3"],':beginner:':["1f530"],':trident:':["1f531"],':yen:':["1f4b4"],':black_square_button:':["1f532"],':white_square_button:':["1f533"],':dollar:':["1f4b5"],':red_circle:':["1f534"],':large_blue_circle:':["1f535"],':money_with_wings:':["1f4b8"],':large_orange_diamond:':["1f536"],':large_blue_diamond:':["1f537"],':chart:':["1f4b9"],':small_orange_diamond:':["1f538"],':small_blue_diamond:':["1f539"],':seat:':["1f4ba"],':small_red_triangle:':["1f53a"],':small_red_triangle_down:':["1f53b"],':computer:':["1f4bb"],':arrow_up_small:':["1f53c"],':briefcase:':["1f4bc"],':arrow_down_small:':["1f53d"],':clock1:':["1f550"],':minidisc:':["1f4bd"],':clock2:':["1f551"],':floppy_disk:':["1f4be"],':clock3:':["1f552"],':cd:':["1f4bf"],':clock4:':["1f553"],':dvd:':["1f4c0"],':clock5:':["1f554"],':clock6:':["1f555"],':file_folder:':["1f4c1"],':clock7:':["1f556"],':clock8:':["1f557"],':open_file_folder:':["1f4c2"],':clock9:':["1f558"],':clock10:':["1f559"],':page_with_curl:':["1f4c3"],':clock11:':["1f55a"],':clock12:':["1f55b"],':page_facing_up:':["1f4c4"],':mount_fuji:':["1f5fb"],':tokyo_tower:':["1f5fc"],':date:':["1f4c5"],':statue_of_liberty:':["1f5fd"],':japan:':["1f5fe"],':calendar:':["1f4c6"],':moyai:':["1f5ff"],':grin:':["1f601"],':joy:':["1f602"],':smiley:':["1f603"],':chart_with_upwards_trend:':["1f4c8"],':smile:':["1f604"],':sweat_smile:':["1f605"],':chart_with_downwards_trend:':["1f4c9"],':laughing:':["1f606"],':satisfied:':["1f606"],':wink:':["1f609"],':bar_chart:':["1f4ca"],':blush:':["1f60a"],':yum:':["1f60b"],':clipboard:':["1f4cb"],':relieved:':["1f60c"],':heart_eyes:':["1f60d"],':pushpin:':["1f4cc"],':smirk:':["1f60f"],':unamused:':["1f612"],':round_pushpin:':["1f4cd"],':sweat:':["1f613"],':pensive:':["1f614"],':paperclip:':["1f4ce"],':confounded:':["1f616"],':kissing_heart:':["1f618"],':straight_ruler:':["1f4cf"],':kissing_closed_eyes:':["1f61a"],':stuck_out_tongue_winking_eye:':["1f61c"],':triangular_ruler:':["1f4d0"],':stuck_out_tongue_closed_eyes:':["1f61d"],':disappointed:':["1f61e"],':bookmark_tabs:':["1f4d1"],':angry:':["1f620"],':rage:':["1f621"],':cry:':["1f622"],':persevere:':["1f623"],':triumph:':["1f624"],':disappointed_relieved:':["1f625"],':fearful:':["1f628"],':weary:':["1f629"],':sleepy:':["1f62a"],':tired_face:':["1f62b"],':sob:':["1f62d"],':cold_sweat:':["1f630"],':scream:':["1f631"],':astonished:':["1f632"],':flushed:':["1f633"],':dizzy_face:':["1f635"],':mask:':["1f637"],':smile_cat:':["1f638"],':joy_cat:':["1f639"],':smiley_cat:':["1f63a"],':heart_eyes_cat:':["1f63b"],':smirk_cat:':["1f63c"],':kissing_cat:':["1f63d"],':pouting_cat:':["1f63e"],':crying_cat_face:':["1f63f"],':scream_cat:':["1f640"],':no_good:':["1f645"],':ok_woman:':["1f646"],':bow:':["1f647"],':see_no_evil:':["1f648"],':hear_no_evil:':["1f649"],':speak_no_evil:':["1f64a"],':raising_hand:':["1f64b"],':raised_hands:':["1f64c"],':person_frowning:':["1f64d"],':person_with_pouting_face:':["1f64e"],':pray:':["1f64f"],':rocket:':["1f680"],':railway_car:':["1f683"],':bullettrain_side:':["1f684"],':bullettrain_front:':["1f685"],':metro:':["1f687"],':station:':["1f689"],':bus:':["1f68c"],':busstop:':["1f68f"],':ambulance:':["1f691"],':fire_engine:':["1f692"],':police_car:':["1f693"],':taxi:':["1f695"],':red_car:':["1f697"],':blue_car:':["1f699"],':truck:':["1f69a"],':ship:':["1f6a2"],':speedboat:':["1f6a4"],':traffic_light:':["1f6a5"],':construction:':["1f6a7"],':rotating_light:':["1f6a8"],':triangular_flag_on_post:':["1f6a9"],':door:':["1f6aa"],':no_entry_sign:':["1f6ab"],':smoking:':["1f6ac"],':no_smoking:':["1f6ad"],':bike:':["1f6b2"],':walking:':["1f6b6"],':mens:':["1f6b9"],':womens:':["1f6ba"],':restroom:':["1f6bb"],':baby_symbol:':["1f6bc"],':toilet:':["1f6bd"],':wc:':["1f6be"],':bath:':["1f6c0"],':metal:':["1f918"],':sign_of_the_horns:':["1f918"],':grinning:':["1f600"],':innocent:':["1f607"],':smiling_imp:':["1f608"],':sunglasses:':["1f60e"],':neutral_face:':["1f610"],':expressionless:':["1f611"],':confused:':["1f615"],':kissing:':["1f617"],':kissing_smiling_eyes:':["1f619"],':stuck_out_tongue:':["1f61b"],':worried:':["1f61f"],':frowning:':["1f626"],':anguished:':["1f627"],':grimacing:':["1f62c"],':open_mouth:':["1f62e"],':hushed:':["1f62f"],':sleeping:':["1f634"],':no_mouth:':["1f636"],':helicopter:':["1f681"],':steam_locomotive:':["1f682"],':train2:':["1f686"],':light_rail:':["1f688"],':tram:':["1f68a"],':oncoming_bus:':["1f68d"],':trolleybus:':["1f68e"],':minibus:':["1f690"],':oncoming_police_car:':["1f694"],':oncoming_taxi:':["1f696"],':oncoming_automobile:':["1f698"],':articulated_lorry:':["1f69b"],':tractor:':["1f69c"],':monorail:':["1f69d"],':mountain_railway:':["1f69e"],':suspension_railway:':["1f69f"],':mountain_cableway:':["1f6a0"],':aerial_tramway:':["1f6a1"],':rowboat:':["1f6a3"],':vertical_traffic_light:':["1f6a6"],':put_litter_in_its_place:':["1f6ae"],':do_not_litter:':["1f6af"],':potable_water:':["1f6b0"],':non-potable_water:':["1f6b1"],':no_bicycles:':["1f6b3"],':bicyclist:':["1f6b4"],':mountain_bicyclist:':["1f6b5"],':no_pedestrians:':["1f6b7"],':children_crossing:':["1f6b8"],':shower:':["1f6bf"],':bathtub:':["1f6c1"],':passport_control:':["1f6c2"],':customs:':["1f6c3"],':baggage_claim:':["1f6c4"],':left_luggage:':["1f6c5"],':earth_africa:':["1f30d"],':earth_americas:':["1f30e"],':globe_with_meridians:':["1f310"],':waxing_crescent_moon:':["1f312"],':waning_gibbous_moon:':["1f316"],':last_quarter_moon:':["1f317"],':waning_crescent_moon:':["1f318"],':new_moon_with_face:':["1f31a"],':last_quarter_moon_with_face:':["1f31c"],':full_moon_with_face:':["1f31d"],':sun_with_face:':["1f31e"],':evergreen_tree:':["1f332"],':deciduous_tree:':["1f333"],':lemon:':["1f34b"],':pear:':["1f350"],':baby_bottle:':["1f37c"],':horse_racing:':["1f3c7"],':rugby_football:':["1f3c9"],':european_post_office:':["1f3e4"],':rat:':["1f400"],':mouse2:':["1f401"],':ox:':["1f402"],':water_buffalo:':["1f403"],':cow2:':["1f404"],':tiger2:':["1f405"],':leopard:':["1f406"],':rabbit2:':["1f407"],':cat2:':["1f408"],':dragon:':["1f409"],':crocodile:':["1f40a"],':whale2:':["1f40b"],':ram:':["1f40f"],':goat:':["1f410"],':rooster:':["1f413"],':dog2:':["1f415"],':pig2:':["1f416"],':dromedary_camel:':["1f42a"],':busts_in_silhouette:':["1f465"],':two_men_holding_hands:':["1f46c"],':two_women_holding_hands:':["1f46d"],':thought_balloon:':["1f4ad"],':euro:':["1f4b6"],':pound:':["1f4b7"],':mailbox_with_mail:':["1f4ec"],':mailbox_with_no_mail:':["1f4ed"],':postal_horn:':["1f4ef"],':no_mobile_phones:':["1f4f5"],':twisted_rightwards_arrows:':["1f500"],':repeat:':["1f501"],':repeat_one:':["1f502"],':arrows_counterclockwise:':["1f504"],':low_brightness:':["1f505"],':high_brightness:':["1f506"],':mute:':["1f507"],':sound:':["1f509"],':no_bell:':["1f515"],':microscope:':["1f52c"],':telescope:':["1f52d"],':clock130:':["1f55c"],':clock230:':["1f55d"],':clock330:':["1f55e"],':clock430:':["1f55f"],':clock530:':["1f560"],':clock630:':["1f561"],':clock730:':["1f562"],':clock830:':["1f563"],':clock930:':["1f564"],':clock1030:':["1f565"],':clock1130:':["1f566"],':clock1230:':["1f567"],':speaker:':["1f508"],':train:':["1f68b"],':medal:':["1f3c5"],':sports_medal:':["1f3c5"],':flag_black:':["1f3f4"],':waving_black_flag:':["1f3f4"],':camera_with_flash:':["1f4f8"],':sleeping_accommodation:':["1f6cc"],':middle_finger:':["1f595"],':reversed_hand_with_middle_finger_extended:':["1f595"],':vulcan:':["1f596"],':raised_hand_with_part_between_middle_and_ring_fingers:':["1f596"],':slight_frown:':["1f641"],':slightly_frowning_face:':["1f641"],':slight_smile:':["1f642"],':slightly_smiling_face:':["1f642"],':airplane_departure:':["1f6eb"],':airplane_arriving:':["1f6ec"],':tone1:':["1f3fb"],':tone2:':["1f3fc"],':tone3:':["1f3fd"],':tone4:':["1f3fe"],':tone5:':["1f3ff"],':upside_down:':["1f643"],':upside_down_face:':["1f643"],':money_mouth:':["1f911"],':money_mouth_face:':["1f911"],':nerd:':["1f913"],':nerd_face:':["1f913"],':hugging:':["1f917"],':hugging_face:':["1f917"],':rolling_eyes:':["1f644"],':face_with_rolling_eyes:':["1f644"],':thinking:':["1f914"],':thinking_face:':["1f914"],':zipper_mouth:':["1f910"],':zipper_mouth_face:':["1f910"],':thermometer_face:':["1f912"],':face_with_thermometer:':["1f912"],':head_bandage:':["1f915"],':face_with_head_bandage:':["1f915"],':robot:':["1f916"],':robot_face:':["1f916"],':lion_face:':["1f981"],':lion:':["1f981"],':unicorn:':["1f984"],':unicorn_face:':["1f984"],':scorpion:':["1f982"],':crab:':["1f980"],':turkey:':["1f983"],':cheese:':["1f9c0"],':cheese_wedge:':["1f9c0"],':hotdog:':["1f32d"],':hot_dog:':["1f32d"],':taco:':["1f32e"],':burrito:':["1f32f"],':popcorn:':["1f37f"],':champagne:':["1f37e"],':bottle_with_popping_cork:':["1f37e"],':bow_and_arrow:':["1f3f9"],':archery:':["1f3f9"],':amphora:':["1f3fa"],':place_of_worship:':["1f6d0"],':worship_symbol:':["1f6d0"],':kaaba:':["1f54b"],':mosque:':["1f54c"],':synagogue:':["1f54d"],':menorah:':["1f54e"],':prayer_beads:':["1f4ff"],':cricket:':["1f3cf"],':cricket_bat_ball:':["1f3cf"],':volleyball:':["1f3d0"],':field_hockey:':["1f3d1"],':hockey:':["1f3d2"],':ping_pong:':["1f3d3"],':table_tennis:':["1f3d3"],':badminton:':["1f3f8"],':fast_forward:':["23e9"],':rewind:':["23ea"],':arrow_double_up:':["23eb"],':arrow_double_down:':["23ec"],':alarm_clock:':["23f0"],':hourglass_flowing_sand:':["23f3"],':ophiuchus:':["26ce"],':white_check_mark:':["2705"],':fist:':["270a"],':raised_hand:':["270b"],':sparkles:':["2728"],':x:':["274c"],':negative_squared_cross_mark:':["274e"],':question:':["2753"],':grey_question:':["2754"],':grey_exclamation:':["2755"],':heavy_plus_sign:':["2795"],':heavy_minus_sign:':["2796"],':heavy_division_sign:':["2797"],':curly_loop:':["27b0"],':loop:':["27bf"]};        
    ns.shortnames = Object.keys(ns.emojioneList).map(function(emoji) {
        return emoji.replace(/[+]/g, "\\$&");
    }).join('|');
    var tmpShortNames = [],
        emoji;
    for (emoji in ns.emojioneList) {
        if (!ns.emojioneList.hasOwnProperty(emoji)) continue;
        tmpShortNames.push(emoji.replace(/[+]/g, "\\$&"));
    }
    ns.shortnames = tmpShortNames.join('|');
    // ns.asciiList = {
    //     '<3':'2764',
    //     '</3':'1f494',
    //     ':\')':'1f602',
    //     ':\'-)':'1f602',
    //     ':D':'1f603',
    //     ':-D':'1f603',
    //     '=D':'1f603',
    //     ':)':'1f604',
    //     ':-)':'1f604',
    //     '=]':'1f604',
    //     '=)':'1f604',
    //     ':]':'1f604',
    //     '\':)':'1f605',
    //     '\':-)':'1f605',
    //     '\'=)':'1f605',
    //     '\':D':'1f605',
    //     '\':-D':'1f605',
    //     '\'=D':'1f605',
    //     '>:)':'1f606',
    //     '>;)':'1f606',
    //     '>:-)':'1f606',
    //     '>=)':'1f606',
    //     ';)':'1f609',
    //     ';-)':'1f609',
    //     '*-)':'1f609',
    //     '*)':'1f609',
    //     ';-]':'1f609',
    //     ';]':'1f609',
    //     ';D':'1f609',
    //     ';^)':'1f609',
    //     '\':(':'1f613',
    //     '\':-(':'1f613',
    //     '\'=(':'1f613',
    //     ':*':'1f618',
    //     ':-*':'1f618',
    //     '=*':'1f618',
    //     ':^*':'1f618',
    //     '>:P':'1f61c',
    //     'X-P':'1f61c',
    //     'x-p':'1f61c',
    //     '>:[':'1f61e',
    //     ':-(':'1f61e',
    //     ':(':'1f61e',
    //     ':-[':'1f61e',
    //     ':[':'1f61e',
    //     '=(':'1f61e',
    //     '>:(':'1f620',
    //     '>:-(':'1f620',
    //     ':@':'1f620',
    //     ':\'(':'1f622',
    //     ':\'-(':'1f622',
    //     ';(':'1f622',
    //     ';-(':'1f622',
    //     '>.<':'1f623',
    //     'D:':'1f628',
    //     ':$':'1f633',
    //     '=$':'1f633',
    //     '#-)':'1f635',
    //     '#)':'1f635',
    //     '%-)':'1f635',
    //     '%)':'1f635',
    //     'X)':'1f635',
    //     'X-)':'1f635',
    //     '*\\0/*':'1f646',
    //     '\\0/':'1f646',
    //     '*\\O/*':'1f646',
    //     '\\O/':'1f646',
    //     'O:-)':'1f607',
    //     '0:-3':'1f607',
    //     '0:3':'1f607',
    //     '0:-)':'1f607',
    //     '0:)':'1f607',
    //     '0;^)':'1f607',
    //     'O:)':'1f607',
    //     'O;-)':'1f607',
    //     'O=)':'1f607',
    //     '0;-)':'1f607',
    //     'O:-3':'1f607',
    //     'O:3':'1f607',
    //     'B-)':'1f60e',
    //     'B)':'1f60e',
    //     '8)':'1f60e',
    //     '8-)':'1f60e',
    //     'B-D':'1f60e',
    //     '8-D':'1f60e',
    //     '-_-':'1f611',
    //     '-__-':'1f611',
    //     '-___-':'1f611',
    //     '>:\\':'1f615',
    //     '>:/':'1f615',
    //     ':-/':'1f615',
    //     ':-.':'1f615',
    //     ':/':'1f615',
    //     ':\\':'1f615',
    //     '=/':'1f615',
    //     '=\\':'1f615',
    //     ':L':'1f615',
    //     '=L':'1f615',
    //     ':P':'1f61b',
    //     ':-P':'1f61b',
    //     '=P':'1f61b',
    //     ':-p':'1f61b',
    //     ':p':'1f61b',
    //     '=p':'1f61b',
    //     ':-Þ':'1f61b',
    //     ':Þ':'1f61b',
    //     ':þ':'1f61b',
    //     ':-þ':'1f61b',
    //     ':-b':'1f61b',
    //     ':b':'1f61b',
    //     'd:':'1f61b',
    //     ':-O':'1f62e',
    //     ':O':'1f62e',
    //     ':-o':'1f62e',
    //     ':o':'1f62e',
    //     'O_O':'1f62e',
    //     '>:O':'1f62e',
    //     ':-X':'1f636',
    //     ':X':'1f636',
    //     ':-#':'1f636',
    //     ':#':'1f636',
    //     '=X':'1f636',
    //     '=x':'1f636',
    //     ':x':'1f636',
    //     ':-x':'1f636',
    //     '=#':'1f636'
    // };
    //ns.asciiRegexp = '(\\<3|&lt;3|\\<\\/3|&lt;\\/3|\\:\'\\)|\\:\'\\-\\)|\\:D|\\:\\-D|\\=D|\\:\\)|\\:\\-\\)|\\=\\]|\\=\\)|\\:\\]|\'\\:\\)|\'\\:\\-\\)|\'\\=\\)|\'\\:D|\'\\:\\-D|\'\\=D|\\>\\:\\)|&gt;\\:\\)|\\>;\\)|&gt;;\\)|\\>\\:\\-\\)|&gt;\\:\\-\\)|\\>\\=\\)|&gt;\\=\\)|;\\)|;\\-\\)|\\*\\-\\)|\\*\\)|;\\-\\]|;\\]|;D|;\\^\\)|\'\\:\\(|\'\\:\\-\\(|\'\\=\\(|\\:\\*|\\:\\-\\*|\\=\\*|\\:\\^\\*|\\>\\:P|&gt;\\:P|X\\-P|x\\-p|\\>\\:\\[|&gt;\\:\\[|\\:\\-\\(|\\:\\(|\\:\\-\\[|\\:\\[|\\=\\(|\\>\\:\\(|&gt;\\:\\(|\\>\\:\\-\\(|&gt;\\:\\-\\(|\\:@|\\:\'\\(|\\:\'\\-\\(|;\\(|;\\-\\(|\\>\\.\\<|&gt;\\.&lt;|D\\:|\\:\\$|\\=\\$|#\\-\\)|#\\)|%\\-\\)|%\\)|X\\)|X\\-\\)|\\*\\\\0\\/\\*|\\\\0\\/|\\*\\\\O\\/\\*|\\\\O\\/|O\\:\\-\\)|0\\:\\-3|0\\:3|0\\:\\-\\)|0\\:\\)|0;\\^\\)|O\\:\\-\\)|O\\:\\)|O;\\-\\)|O\\=\\)|0;\\-\\)|O\\:\\-3|O\\:3|B\\-\\)|B\\)|8\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\-__\\-|\\-___\\-|\\>\\:\\\\|&gt;\\:\\\\|\\>\\:\\/|&gt;\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\:\\-P|\\=P|\\:\\-p|\\:p|\\=p|\\:\\-Þ|\\:\\-&THORN;|\\:Þ|\\:&THORN;|\\:þ|\\:&thorn;|\\:\\-þ|\\:\\-&thorn;|\\:\\-b|\\:b|d\\:|\\:\\-O|\\:O|\\:\\-o|\\:o|O_O|\\>\\:O|&gt;\\:O|\\:\\-X|\\:X|\\:\\-#|\\:#|\\=X|\\=x|\\:x|\\:\\-x|\\=#)';
    // javascript escapes here must be ordered from largest length to shortest
    ns.imagePathPNG = '/images/png/';
    //ns.imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
    //ns.imagePathSVGSprites = './../assets/sprites/emojione.sprites.svg';
    //ns.imageType = 'png'; // or svg
    //ns.sprites = false; // if this is true then sprite markup will be used (if SVG image type is set then you must include the SVG sprite file locally)
    //ns.unicodeAlt = true; // use the unicode char as the alt attribute (makes copy and pasting the resulting text better)
    //ns.ascii = false; // change to true to convert ascii smileys
    //ns.cacheBustParam = '?v=2.1.1'; // you can [optionally] modify this to force browsers to refresh their cache. it will be appended to the send of the filenames

    ns.regShortNames = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+ns.shortnames+")", "gi");
    //ns.regAscii = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)"+ns.asciiRegexp+"(?=\\s|$|[!,.?]))", "g");
    //ns.regUnicode = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+ns.unicodeRegexp+")", "gi");
                    
    // ns.toImage = function(str) {
    //     str = ns.unicodeToImage(str);
    //     str = ns.shortnameToImage(str);
    //     return str;
    // };

    // // Uses toShort to transform all unicode into a standard shortname
    // // then transforms the shortname into unicode
    // // This is done for standardization when converting several unicode types
    // ns.unifyUnicode = function(str) {
    //     str = ns.toShort(str);
    //     str = ns.shortnameToUnicode(str);
    //     return str;
    // };

    // Replace shortnames (:wink:) with Ascii equivalents ( ;^) )
    // Useful for systems that dont support unicode nor images
    // ns.shortnameToAscii = function(str) {
    //     var unicode,
    //         // something to keep in mind here is that array flip will destroy
    //         // half of the ascii text "emojis" because the unicode numbers are duplicated
    //         // this is ok for what it's being used for
    //         unicodeToAscii = ns.objectFlip(ns.asciiList);

    //     str = str.replace(ns.regShortNames, function(shortname) {
    //         if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
    //             // if the shortname doesnt exist just return the entire match
    //             return shortname;
    //         }
    //         else {
    //             unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length-1];
    //             if(typeof unicodeToAscii[unicode] !== 'undefined') {
    //                 return unicodeToAscii[unicode];
    //             } else {
    //                 return shortname;
    //             }
    //         }
    //     });
    //     return str;
    // };

    // will output unicode from shortname
    // useful for sending emojis back to mobile devices
  //   ns.shortnameToUnicode = function(str) {
  //       // replace regular shortnames first
  //       var unicode;
  //       str = str.replace(ns.regShortNames, function(shortname) {
  //           if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
  //               // if the shortname doesnt exist just return the entire match
  //               return shortname;
  //           }
  //           unicode = ns.emojioneList[shortname][0].toUpperCase();
  //           return ns.convert(unicode);
  //       });

  //       // if ascii smileys are turned on, then we'll replace them!
  //       if (ns.ascii) {

  //           str = str.replace(ns.regAscii, function(entire, m1, m2, m3) {
  //               if( (typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList)) ) {
  //                   // if the shortname doesnt exist just return the entire match
  //                   return entire;
  //               }

  //               m3 = ns.unescapeHTML(m3);
  //               unicode = ns.asciiList[m3].toUpperCase();
  //               return m2+ns.convert(unicode);
  //           });
  //       }

		// return str;
  //   };

    ns.shortnameToImage = function(str) {
        // replace regular shortnames first
        var replaceWith,unicode,alt;
        str = str.replace(ns.regShortNames, function(shortname) {
            if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            }
            else {
                unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length-1];

                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                //alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : shortname;

                // if(ns.imageType === 'png') {
                //     if(ns.sprites) {
                //         replaceWith = '<span class="emojione emojione-'+unicode+'" title="'+shortname+'">'+alt+'</span>';
                //     }
                //     else {
                //         replaceWith = '<img class="emojione" alt="'+alt+'" src="'+ns.imagePathPNG+unicode+'.png'+ns.cacheBustParam+'"/>';
                	       replaceWith = '<img class="emojione" alt="'+shortname+'" onclick="clickmood(this);" src="'+ns.imagePathPNG+unicode+'.png"/>';
                //     }
                // }
                // else {
                //     // svg
                //     if(ns.sprites) {
                //         replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
                //     }
                //     else {
                //         replaceWith = '<object class="emojione" data="'+ns.imagePathSVG+unicode+'.svg'+ns.cacheBustParam+'" type="image/svg+xml" standby="'+alt+'">'+alt+'</object>';
                //     }
                // }

                return replaceWith;
            }
        });

        // if ascii smileys are turned on, then we'll replace them!
        // if (ns.ascii) {

        //     str = str.replace(ns.regAscii, function(entire, m1, m2, m3) {
        //         if( (typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList)) ) {
        //             // if the shortname doesnt exist just return the entire match
        //             return entire;
        //         }

        //         m3 = ns.unescapeHTML(m3);
        //         unicode = ns.asciiList[m3];

        //         // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
        //         alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : ns.escapeHTML(m3);

        //         if(ns.imageType === 'png') {
        //             if(ns.sprites) {
        //                 replaceWith = m2+'<span class="emojione emojione-'+unicode+'" title="'+ns.escapeHTML(m3)+'">'+alt+'</span>';
        //             }
        //             else {
        //                 replaceWith = m2+'<img class="emojione" alt="'+alt+'" src="'+ns.imagePathPNG+unicode+'.png'+ns.cacheBustParam+'"/>';
        //             }
        //         }
        //         else {
        //             // svg
        //             if(ns.sprites) {
        //                 replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
        //             }
        //             else {
        //                 replaceWith = m2+'<object class="emojione" data="'+ns.imagePathSVG+unicode+'.svg'+ns.cacheBustParam+'" type="image/svg+xml" standby="'+alt+'">'+alt+'</object>';
        //             }
        //         }

        //         return replaceWith;
        //     });
        // }

        return str;
    };
    ns.shortnameToDivImage = function(str) {
        // replace regular shortnames first
        var replaceWith,unicode,alt;
        str = str.replace(ns.regShortNames, function(shortname) {
            if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
                return shortname;
            }
            else {
                unicode = ns.emojioneList[shortname][ns.emojioneList[shortname].length-1];
                replaceWith = '<img class="textemojione" alt="'+shortname+'" src="'+ns.imagePathPNG+unicode+'.png"/>';
                return replaceWith;
            }
        });
        return str;
    };
    // ns.unicodeToImage = function(str) {

    //     var replaceWith,unicode,alt;

    //     if((!ns.unicodeAlt) || (ns.sprites)) {
    //         // if we are using the shortname as the alt tag then we need a reversed array to map unicode code point to shortnames
    //         var mappedUnicode = ns.mapShortToUnicode();
    //     }

    //     str = str.replace(ns.regUnicode, function(unicodeChar) {
    //         if( (typeof unicodeChar === 'undefined') || (unicodeChar === '') || (!(unicodeChar in ns.jsEscapeMap)) ) {
    //             // if the unicodeChar doesnt exist just return the entire match
    //             return unicodeChar;
    //         }
    //         else {
    //             // get the unicode codepoint from the actual char
    //             unicode = ns.jsEscapeMap[unicodeChar];

    //             // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
    //             alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : mappedUnicode[unicode];

    //             if(ns.imageType === 'png') {
    //                 if(ns.sprites) {
    //                     replaceWith = '<span class="emojione emojione-'+unicode+'" title="'+mappedUnicode[unicode]+'">'+alt+'</span>';
    //                 }
    //                 else {
    //                     replaceWith = '<img class="emojione" alt="'+alt+'" src="'+ns.imagePathPNG+unicode+'.png'+ns.cacheBustParam+'"/>';
    //                 }
    //             }
    //             else {
    //                 // svg
    //                 if(ns.sprites) {
    //                     replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
    //                 }
    //                 else {
    //                     replaceWith = '<img class="emojione" alt="'+alt+'" src="'+ns.imagePathSVG+unicode+'.svg'+ns.cacheBustParam+'"/>';
    //                 }
    //             }

    //             return replaceWith;
    //         }
    //     });

    //     return str;
    // };

    // super simple loop to replace all unicode emoji to shortnames
    // needs to be improved into one big replacement instead, for performance reasons
    // ns.toShort = function(str) { // this is really just unicodeToShortname() but I opted for the shorthand name to match toImage()
    //     for (var shortcode in ns.emojioneList) {
    //         if (!ns.emojioneList.hasOwnProperty(shortcode)) { continue; }
    //         for(var i = 0, len = ns.emojioneList[shortcode].length; i < len; i++){
    //             var unicode = ns.emojioneList[shortcode][i];
    //             str = ns.replaceAll(str,ns.convert(unicode.toUpperCase()),shortcode);
    //         }
    //     }
    //     return str;
    // };

    // for converting unicode code points and code pairs to their respective characters
    // ns.convert = function(unicode) {
    //     if(unicode.indexOf("-") > -1) {
    //         var parts = [];
    //         var s = unicode.split('-');
    //         for(var i = 0; i < s.length; i++) {
    //             var part = parseInt(s[i], 16);
    //             if (part >= 0x10000 && part <= 0x10FFFF) {
    //                 var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
    //                 var lo = ((part - 0x10000) % 0x400) + 0xDC00;
    //                 part = (String.fromCharCode(hi) + String.fromCharCode(lo));
    //             }
    //             else {
    //                 part = String.fromCharCode(part);
    //             }
    //             parts.push(part);
    //         }
    //         return parts.join('');
    //     }
    //     else {
    //         var s = parseInt(unicode, 16);
    //         if (s >= 0x10000 && s <= 0x10FFFF) {
    //             var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
    //             var lo = ((s - 0x10000) % 0x400) + 0xDC00;
    //             return (String.fromCharCode(hi) + String.fromCharCode(lo));
    //         }
    //         else {
    //             return String.fromCharCode(s);
    //         }
    //     }
    // };

    // ns.escapeHTML = function (string) {
    //     var escaped = {
    //         '&' : '&amp;',
    //         '<' : '&lt;',
    //         '>' : '&gt;',
    //         '"' : '&quot;',
    //         '\'': '&#039;'
    //     };

    //     return string.replace(/[&<>"']/g, function (match) {
    //         return escaped[match];
    //     });
    // };
    // ns.unescapeHTML = function (string) {
    //     var unescaped = {
    //         '&amp;'  : '&',
    //         '&#38;'  : '&',
    //         '&#x26;' : '&',
    //         '&lt;'   : '<',
    //         '&#60;'  : '<',
    //         '&#x3C;' : '<',
    //         '&gt;'   : '>',
    //         '&#62;'  : '>',
    //         '&#x3E;' : '>',
    //         '&quot;' : '"',
    //         '&#34;'  : '"',
    //         '&#x22;' : '"',
    //         '&apos;' : '\'',
    //         '&#39;'  : '\'',
    //         '&#x27;' : '\''
    //     };

    //     return string.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/ig, function (match) {
    //         return unescaped[match];
    //     });
    // };
    // ns.mapShortToUnicode = function() {
    //     var new_obj = {};
    //     for (var shortname in ns.emojioneList) {
    //         if (!ns.emojioneList.hasOwnProperty(shortname)) { continue; }
    //         for(var i = 0, len = ns.emojioneList[shortname].length; i < len; i++){
    //             new_obj[ns.emojioneList[shortname][i]] = shortname;
    //         }
    //     }
    //     return new_obj;
    // };
    // //reverse an object
    // ns.objectFlip = function (obj) {
    //     var key, tmp_obj = {};

    //     for (key in obj) {
    //         if (obj.hasOwnProperty(key)) {
    //             tmp_obj[obj[key]] = key;
    //         }
    //     }

    //     return tmp_obj;
    // };

    // ns.escapeRegExp = function(string) {
    //     return string.replace(/[-[\]{}()*+?.,;:&\\^$|#\s]/g, "\\$&");
    // };

    // ns.replaceAll = function(string, find, replaceWith) {
    //     var escapedFind = ns.escapeRegExp(find);
    //     var search = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+escapedFind+")", "gi");

    //     // callback prevents replacing anything inside of these common html tags as well as between an <object></object> tag
    //     var replace = function(entire, m1) {
    //         return ((typeof  m1 === 'undefined') || (m1 === '')) ? entire : replaceWith;
    //     };

    //     return string.replace(search,replace);
    // };

}(this.emojione = this.emojione || {}));
if(typeof module === "object") module.exports = this.emojione;
