package com.example.springbootvideoplayers.videoplayers.videoPlayer.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class ChatParticipantServiceTest {

    /*@Mock
    private VideoPlayerRepository chatParticipantRepository;

    @InjectMocks
    private VideoPlayerService underTest;


    @Test
    void canFindAllChatParticipants() {
        // when
        underTest.findAllChatParticipants();
        // then
        verify(chatParticipantRepository).findAll();
    }

    @Test
    void canAddChatParticipant() {
        // given
        VideoPlayerEntity chatParticipant = new VideoPlayerEntity(
                UUID.randomUUID(),
                "Bunao Lakandula Tondo",
                "Talk of Tondo",
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z").format(new Date())
        );

        // when
        underTest.addChatParticipant(chatParticipant);

        // then
        ArgumentCaptor<VideoPlayerEntity> chatParticipantDtoArgumentCaptor = ArgumentCaptor.forClass(
                VideoPlayerEntity.class
        );
        verify(chatParticipantRepository).save(chatParticipantDtoArgumentCaptor.capture());
        VideoPlayerEntity capturedChatParticipant = chatParticipantDtoArgumentCaptor.getValue();

        assertThat(capturedChatParticipant).isEqualTo(chatParticipant);
    }*/
}