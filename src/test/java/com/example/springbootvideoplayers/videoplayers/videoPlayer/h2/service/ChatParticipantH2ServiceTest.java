package com.example.springbootvideoplayers.videoplayers.videoPlayer.h2.service;


import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DataJpaTest
public class ChatParticipantH2ServiceTest {
    /*@Autowired
    private VideoPlayerRepository repo;
    private VideoPlayerService service;

    VideoPlayerEntity chatParticipant = new VideoPlayerEntity();

    @BeforeEach
    public void setup() {
        chatParticipant.setSpeaker("Eddie Brock");
        chatParticipant.setTalkContent("I am talking");

        service = new VideoPlayerService(repo);

    }
    @Test
    public void shouldFindAllChatParticipant() {
        service.addChatParticipant(chatParticipant);

        Iterable<VideoPlayerEntity> chatParticipantList = service.findAllChatParticipants();
        VideoPlayerEntity savedChatParticipant = chatParticipantList.iterator().next();

        assertThat(savedChatParticipant).isNotNull();
    }
    @Test
    public void shouldAddChatParticipant() {

        service.addChatParticipant(chatParticipant);

        Iterable<VideoPlayerEntity> chatParticipantList = service.findAllChatParticipants();
        VideoPlayerEntity savedChatParticipant = chatParticipantList.iterator().next();

        assertThat(chatParticipant).isEqualTo(savedChatParticipant);

    }

    @Test
    public void shouldUpdateChatParticipant() {
        VideoPlayerEntity savedChatParticipant  = service.addChatParticipant(chatParticipant);
        savedChatParticipant.setTalkContent("I am talking 2");

        service.updateChatParticipant(savedChatParticipant.getId(), savedChatParticipant);
        VideoPlayerEntity foundAntiHero = service.findChatParticipantById(savedChatParticipant.getId());

        assertThat(foundAntiHero.getTalkContent()).isEqualTo("I am talking 2");
    }

    @Test
    public void shouldDeleteChatParticipant() {
        assertThrows(NotFoundException.class, new Executable() {
            @Override
            public void execute() throws Throwable {
                VideoPlayerEntity savedChatParticipant  = service.addChatParticipant(chatParticipant);

                service.removeChatParticipantById(savedChatParticipant.getId());
                VideoPlayerEntity foundChatParticipant = service.findChatParticipantById(savedChatParticipant.getId());

                assertThat(foundChatParticipant).isNull();
            }
        });
    }

    @Test
    public void shouldFindChatParticipantById() {
        VideoPlayerEntity savedChatParticipant  = service.addChatParticipant(chatParticipant);

        VideoPlayerEntity foundChatParticipant = service.findChatParticipantById(savedChatParticipant.getId());
        assertThat(foundChatParticipant).isNotNull();

    }

    @Test
    public void shouldNotFindChatParticipantById() {
        assertThrows(NotFoundException.class, new Executable() {
            @Override
            public void execute() throws Throwable {
                VideoPlayerEntity foundChatParticipant = service.findChatParticipantById(UUID.randomUUID());
                assertThat(foundChatParticipant).isNull();
            }
        });

    }
*/


}
